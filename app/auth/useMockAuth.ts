import { useState } from "react";

export type Role = "admin" | "user";

export function useMockAuth() {
  const [user, setUser] = useState<null | { role: Role }>({
    role: "admin", // change to "user" to test
  });

  return { user };
}
