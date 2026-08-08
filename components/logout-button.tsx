"use client";

import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { signOut } from "@/lib/auth-client";

export function LogoutButton() {
  const router = useRouter();

  async function logOut() {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login"); // or window.location.href = "/login"
        },
      },
    });
  }

  return (
    <Button variant="destructive" size="sm" onClick={logOut}>
      Log out
    </Button>
  );
}
