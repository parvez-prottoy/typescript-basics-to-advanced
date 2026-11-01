"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getUserRole(role) {
    if (role === "admin") {
        return "You have full access.";
    }
    else if (role === "user") {
        return "You have limited access.";
    }
    else {
        return "You have guest access.";
    }
}
getUserRole("guest");
const admin = {
    id: 1,
    name: "Alice",
    role: "admin",
    permissions: ["read", "write", "delete"],
};
//# sourceMappingURL=07-union-intersection.js.map