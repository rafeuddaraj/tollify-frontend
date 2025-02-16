"use client";

import { LogOutIcon } from "lucide-react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";
export default function Logout() {
  return (
    <>
      <Button
        variant="outline"
        className="w-full"
        onClick={() => signOut({ redirectTo: "/login" })}
      >
        <LogOutIcon className="mr-2 h-4 w-4" />
        Log Out
      </Button>
    </>
  );
}
