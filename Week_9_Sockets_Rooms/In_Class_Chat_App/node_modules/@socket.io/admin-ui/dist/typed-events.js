"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Feature = void 0;
var Feature;
(function (Feature) {
    Feature["EMIT"] = "EMIT";
    Feature["JOIN"] = "JOIN";
    Feature["LEAVE"] = "LEAVE";
    Feature["DISCONNECT"] = "DISCONNECT";
    // the following features are only available starting with Socket.IO v4.0.0
    Feature["MJOIN"] = "MJOIN";
    Feature["MLEAVE"] = "MLEAVE";
    Feature["MDISCONNECT"] = "MDISCONNECT";
})(Feature = exports.Feature || (exports.Feature = {}));
