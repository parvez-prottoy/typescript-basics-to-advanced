// * Type Aliases
type UserObj = {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  email: string;
  address: {
    street: string;
    city: string;
  };
  contactNumber: string;
  gender: "male" | "female";
};

const user1: UserObj = {
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
type UserFullNameObj = (user: UserObj) => string;
const getUserFullName: UserFullNameObj = (user) => {
  return `${user.name.firstName} ${user.name.lastName}`;
};
getUserFullName(user1);
