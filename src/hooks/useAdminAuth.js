"use client";

import { useEffect, useState } from "react";

export default function useAdminAuth() {
  const [role, setRole] = useState(null);

  useEffect(() => {
    async function check() {
      try {
        const res = await fetch("/api/admin/status", {
            credentials: "include"
        });
        const data = await res.json();

        if (data.role === "admin") {
          return setRole("admin");
        }

        const res2 = await fetch("/api/admin/subadminstatus", {
            credentials: "include"
        });
        const data2 = await res2.json();

        if (data2.role === "subadmin") {
          return setRole("subadmin");
        }

        setRole(null);
      } catch {
        setRole(null);
      }
    }

    check();
  }, []);

  return role;
}
