"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import { registerAction } from "@/actions";
import { signIn } from "next-auth/react";
import { useFormState } from "react-dom";

export default function Register() {
  const {} = useFormState();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    licensePlate: "",
  });
  const { isLoading, setIsLoading } = useState(false);

  const { toast } = useToast();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }
    try {
      const registerData = await registerAction(formData);
      if (registerData) {
        await signIn("credentials", {
          email: formData.email,
          password: formData.password,
          redirectTo: "/dashboard",
        });
        return toast({
          title: "Registration Submitted",
          description: "Your application is pending approval.",
        });
      }
      throw new Error("");
    } catch {
      toast({
        title: "Registration Failed",
        description: "Something went wrong.",
      });
    }
    setIsLoading(false);
  };

  return (
    <div className="container mx-auto py-8">
      <Card className="w-1/2 mx-auto">
        <CardHeader>
          <CardTitle>Register for Tollify</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" required onChange={handleChange} />
            </div>
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
              <Label htmlFor="phoneNumber">Email</Label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                type="number"
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
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
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
              Register
            </Button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
