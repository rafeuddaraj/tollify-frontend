"use client";

import { LogOutIcon } from "lucide-react";
import { signOut } from "next-auth/react";
import { useState } from "react";
import { Button } from "../ui/button";
export default function Logout() {
  const [loading, setLoading] = useState(false);
  const handleLogout = async () => {
    setLoading(true);
    try {
      await signOut({ redirectTo: "/login" });
    } catch {
      //
    }
    setLoading(false);
  };
  return (
    <>
      <Button
        variant="outline"
        className="w-full"
        onClick={handleLogout}
        disabled={loading}
      >
        <LogOutIcon className="mr-2 h-4 w-4" />
        Log Out
      </Button>
    </>
  );
}
