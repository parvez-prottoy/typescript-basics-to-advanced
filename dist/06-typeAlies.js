"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user1 = {
    id: 1,
    name: {
        firstName: "John",
        lastName: "Doe",
    },
    email: "john.doe@example.com",
    address: {
        street: "123 Main St",
        city: "Anytown",
    },
    contactNumber: "555-1234",
    gender: "male",
};
const getUserFullName = (user) => {
    return `${user.name.firstName} ${user.name.lastName}`;
};
getUserFullName(user1);
//# sourceMappingURL=06-typeAlies.js.map