"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();

    try {
      console.log({ formData });

      await signIn("credentials", {
        ...formData,
        callbackUrl: "/dashboard",
      });
      toast({
        title: "Login Successful",
        description: "Welcome back to Tollify!",
      });
    } catch {
      toast({
        title: "Login Failure",
        description: "Something went wrong!",
      });
    }
    setIsLoading(false);
  };

  return (
    <div className="container mx-auto py-8">
      <Card className="w-1/2 mx-auto">
        <CardHeader>
          <CardTitle>Login to Tollify</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                onChange={handleChange}
              />
            </div>
            <Button
              type="submit"
              className={`w-full ${isLoading ? "animate-pulse" : ""}`}
              disabled={isLoading}
            >
              Login
            </Button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link href="/register" className="text-blue-600 hover:underline">
              Register
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
