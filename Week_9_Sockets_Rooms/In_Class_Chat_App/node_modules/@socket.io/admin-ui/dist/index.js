"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisStore = exports.InMemoryStore = exports.instrument = void 0;
const typed_events_1 = require("./typed-events");
const debug_1 = require("debug");
const bcrypt_1 = require("bcrypt");
const cluster_1 = require("cluster");
const stores_1 = require("./stores");
const os = require("os");
const crypto_1 = require("crypto");
const debug = debug_1.default("socket.io-admin");
const randomId = () => crypto_1.randomBytes(8).toString("hex");
const initAuthenticationMiddleware = (namespace, options) => {
    var _a;
    if (options.auth === undefined) {
        throw new Error("the `auth` option must be specified or explicitly set to `false`");
    }
    if (options.auth === false) {
        debug("WARN: authentication is disabled, please use with caution");
    }
    else if (((_a = options.auth) === null || _a === void 0 ? void 0 : _a.type) === "basic") {
        debug("basic authentication is enabled");
        const basicAuth = options.auth;
        try {
            bcrypt_1.getRounds(basicAuth.password);
        }
        catch (e) {
            throw new Error("the `password` field must be a valid bcrypt hash");
        }
        namespace.use(async (socket, next) => {
            const sessionId = socket.handshake.auth.sessionId;
            if (sessionId && (await options.store.doesSessionExist(sessionId))) {
                debug("authentication success with valid session ID");
                return next();
            }
            if (socket.handshake.auth.username === basicAuth.username) {
                const isMatching = await bcrypt_1.compare(socket.handshake.auth.password, basicAuth.password);
                if (isMatching) {
                    debug("authentication success with valid credentials");
                    const sessionId = randomId();
                    options.store.saveSession(sessionId);
                    socket.emit("session", sessionId);
                    return next();
                }
            }
            debug("invalid credentials");
            next(new Error("invalid credentials"));
        });
    }
    else {
        throw new Error("invalid `auth` option, please check the documentation");
    }
};
const computeServerId = (serverId) => {
    if (serverId) {
        return serverId;
    }
    else if (cluster_1.isWorker) {
        return `${os.hostname()}#${process.pid}`;
    }
    else {
        return os.hostname();
    }
};
const initStatsEmitter = (adminNamespace, serverId) => {
    const baseStats = {
        serverId: computeServerId(serverId),
        hostname: os.hostname(),
        pid: process.pid,
    };
    const emitStats = () => {
        debug("emit stats");
        // @ts-ignore private reference
        const clientsCount = adminNamespace.server.engine.clientsCount;
        adminNamespace.emit("server_stats", Object.assign({}, baseStats, {
            uptime: process.uptime(),
            clientsCount,
        }));
    };
    const interval = setInterval(emitStats, 2000);
    interval.unref(); // so that the timer does not prevent the process from exiting
    emitStats();
};
const detectSupportedFeatures = (io) => {
    const supportedFeatures = [
        typed_events_1.Feature.EMIT,
        typed_events_1.Feature.JOIN,
        typed_events_1.Feature.LEAVE,
        typed_events_1.Feature.DISCONNECT,
    ];
    // added in Socket.IO v4.0.0
    if (typeof io.socketsJoin === "function") {
        supportedFeatures.push(typed_events_1.Feature.MJOIN);
    }
    if (typeof io.socketsLeave === "function") {
        supportedFeatures.push(typed_events_1.Feature.MLEAVE);
    }
    if (typeof io.disconnectSockets === "function") {
        supportedFeatures.push(typed_events_1.Feature.MDISCONNECT);
    }
    return supportedFeatures;
};
const fetchAllSockets = async (io) => {
    if (typeof io.fetchSockets === "function") {
        // Socket.IO v4
        const promises = [];
        io._nsps.forEach((nsp) => {
            const promise = nsp.fetchSockets().then((sockets) => {
                return sockets.map((socket) => {
                    return serialize(socket, nsp.name);
                });
            });
            promises.push(promise);
        });
        return (await Promise.all(promises)).reduce((acc, sockets) => {
            acc.push(...sockets);
            return acc;
        }, []);
    }
    else {
        // Socket.IO v3
        // Note: we only fetch local Socket instances, so this will not work with multiple Socket.IO servers
        const sockets = [];
        io._nsps.forEach((nsp) => {
            nsp.sockets.forEach((socket) => {
                sockets.push(serialize(socket, socket.nsp.name));
            });
        });
        return sockets;
    }
};
const registerFeatureHandlers = (io, socket, supportedFeatures) => {
    if (supportedFeatures.includes(typed_events_1.Feature.EMIT)) {
        socket.on("emit", (nsp, filter, ev, ...args) => {
            debug(`emit ${ev} to all socket instances in namespace ${nsp} and room ${filter}`);
            if (filter) {
                io.of(nsp)
                    .in(filter)
                    .emit(ev, ...args);
            }
            else {
                io.of(nsp).emit(ev, ...args);
            }
        });
    }
    if (supportedFeatures.includes(typed_events_1.Feature.JOIN)) {
        if (typeof io.socketsJoin === "function") {
            // Socket.IO v4
            socket.on("join", (nsp, room, filter) => {
                if (filter) {
                    debug(`make all socket instances in namespace ${nsp} and room ${filter} join room ${room}`);
                    io.of(nsp).in(filter).socketsJoin(room);
                }
                else {
                    debug(`make all socket instances in namespace ${nsp} join room ${room}`);
                    io.of(nsp).socketsJoin(room);
                }
            });
        }
        else {
            // Socket.IO v3
            socket.on("join", (nsp, room, id) => {
                if (id) {
                    debug(`make socket instance ${id} in namespace ${nsp} join room ${room}`);
                    const socket = io.of(nsp).sockets.get(id);
                    socket === null || socket === void 0 ? void 0 : socket.join(room);
                }
            });
        }
    }
    if (supportedFeatures.includes(typed_events_1.Feature.LEAVE)) {
        if (typeof io.socketsLeave === "function") {
            // Socket.IO v4
            socket.on("leave", (nsp, room, filter) => {
                if (filter) {
                    debug(`make all socket instances in namespace ${nsp} and room ${filter} leave room ${room}`);
                    io.of(nsp).in(filter).socketsLeave(room);
                }
                else {
                    debug(`make all socket instances in namespace ${nsp} leave room ${room}`);
                    io.of(nsp).socketsLeave(room);
                }
            });
        }
        else {
            // Socket.IO v3
            socket.on("leave", (nsp, room, id) => {
                if (id) {
                    debug(`make socket instance ${id} in namespace ${nsp} leave room ${room}`);
                    const socket = io.of(nsp).sockets.get(id);
                    socket === null || socket === void 0 ? void 0 : socket.leave(room);
                }
            });
        }
    }
    if (supportedFeatures.includes(typed_events_1.Feature.DISCONNECT)) {
        if (typeof io.disconnectSockets === "function") {
            // Socket.IO v4
            socket.on("_disconnect", (nsp, close, filter) => {
                if (filter) {
                    debug(`make all socket instances in namespace ${nsp} and room ${filter} disconnect`);
                    io.of(nsp).in(filter).disconnectSockets(close);
                }
                else {
                    debug(`make all socket instances in namespace ${nsp} disconnect`);
                    io.of(nsp).disconnectSockets(close);
                }
            });
        }
        else {
            // Socket.IO v3
            socket.on("_disconnect", (nsp, close, id) => {
                if (id) {
                    debug(`make socket instance ${id} in namespace ${nsp} disconnect`);
                    const socket = io.of(nsp).sockets.get(id);
                    socket === null || socket === void 0 ? void 0 : socket.disconnect(close);
                }
            });
        }
    }
};
const registerListeners = (adminNamespace, nsp) => {
    nsp.on("connection", (socket) => {
        // @ts-ignore
        const clientId = socket.client.id;
        socket.data = socket.data || {};
        socket.data._admin = {
            clientId: clientId.substring(0, 12),
            transport: socket.conn.transport.name,
        };
        adminNamespace.emit("socket_connected", serialize(socket, nsp.name));
        socket.conn.on("upgrade", (transport) => {
            socket.data._admin.transport = transport.name;
            adminNamespace.emit("socket_updated", {
                id: socket.id,
                nsp: nsp.name,
                transport: transport.name,
            });
        });
        socket.on("disconnect", (reason) => {
            adminNamespace.emit("socket_disconnected", nsp.name, socket.id, reason);
        });
    });
    nsp.adapter.on("join-room", (room, id) => {
        adminNamespace.emit("room_joined", nsp.name, room, id);
    });
    nsp.adapter.on("leave-room", (room, id) => {
        process.nextTick(() => {
            adminNamespace.emit("room_left", nsp.name, room, id);
        });
    });
};
const serialize = (socket, nsp) => {
    var _a, _b, _c, _d;
    const clientId = (_b = (_a = socket.data) === null || _a === void 0 ? void 0 : _a._admin) === null || _b === void 0 ? void 0 : _b.clientId;
    const transport = (_d = (_c = socket.data) === null || _c === void 0 ? void 0 : _c._admin) === null || _d === void 0 ? void 0 : _d.transport;
    const address = socket.handshake.headers["cf-connecting-ip"] ||
        socket.handshake.headers["x-forwarded-for"] ||
        socket.handshake.address;
    return {
        id: socket.id,
        clientId,
        transport,
        nsp,
        handshake: {
            address,
            headers: socket.handshake.headers,
            query: socket.handshake.query,
            issued: socket.handshake.issued,
            secure: socket.handshake.secure,
            time: socket.handshake.time,
            url: socket.handshake.url,
            xdomain: socket.handshake.xdomain,
            // ignore auth and other attributes like sessionStore
        },
        rooms: [...socket.rooms],
    };
};
function instrument(io, opts) {
    const options = Object.assign({
        namespaceName: "/admin",
        auth: undefined,
        readonly: false,
        serverId: undefined,
        store: new stores_1.InMemoryStore(),
    }, opts);
    debug("options: %j", options);
    const adminNamespace = io.of(options.namespaceName);
    initAuthenticationMiddleware(adminNamespace, options);
    const supportedFeatures = options.readonly ? [] : detectSupportedFeatures(io);
    debug("supported features: %j", supportedFeatures);
    initStatsEmitter(adminNamespace, options.serverId);
    adminNamespace.on("connection", async (socket) => {
        registerFeatureHandlers(io, socket, supportedFeatures);
        socket.emit("config", {
            supportedFeatures,
        });
        socket.emit("all_sockets", await fetchAllSockets(io));
    });
    io._nsps.forEach((nsp) => registerListeners(adminNamespace, nsp));
    io.on("new_namespace", (nsp) => registerListeners(adminNamespace, nsp));
}
exports.instrument = instrument;
var stores_2 = require("./stores");
Object.defineProperty(exports, "InMemoryStore", { enumerable: true, get: function () { return stores_2.InMemoryStore; } });
Object.defineProperty(exports, "RedisStore", { enumerable: true, get: function () { return stores_2.RedisStore; } });
