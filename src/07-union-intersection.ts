// * union and intersection types
type UserRole = "admin" | "user" | "guest";

function getUserRole(role: UserRole): string {
  if (role === "admin") {
    return "You have full access.";
  } else if (role === "user") {
    return "You have limited access.";
  } else {
    return "You have guest access.";
  }
}
getUserRole("guest");

// * Intersection Types
type UserDetails = {
  id: number;
  name: string;
};
type AdminDetails = UserDetails & {
  role: "admin";
  permissions: string[];
};

const admin: AdminDetails = {
  id: 1,
  name: "Alice",
  role: "admin",
  permissions: ["read", "write", "delete"],
};
