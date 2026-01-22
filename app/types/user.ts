export type userRole = "admin" | "user";

export interface User {
  id: string;
  email: string;
  name: string;
  role: userRole;
}

