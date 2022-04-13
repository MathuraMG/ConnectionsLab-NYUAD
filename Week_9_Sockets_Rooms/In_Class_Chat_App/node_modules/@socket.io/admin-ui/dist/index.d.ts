import { Server } from "socket.io";
import { Store } from "./stores";
interface BasicAuthentication {
    type: "basic";
    username: string;
    password: string;
}
interface InstrumentOptions {
    /**
     * The name of the admin namespace
     *
     * @default "/admin"
     */
    namespaceName: string;
    /**
     * The authentication method
     */
    auth?: false | BasicAuthentication;
    /**
     * Whether updates are allowed
     * @default false
     */
    readonly: boolean;
    /**
     * The unique ID of the server
     * @default `require("os").hostname()`
     */
    serverId?: string;
    /**
     * The store
     */
    store: Store;
}
export declare function instrument(io: Server, opts: Partial<InstrumentOptions>): void;
export { InMemoryStore, RedisStore } from "./stores";
