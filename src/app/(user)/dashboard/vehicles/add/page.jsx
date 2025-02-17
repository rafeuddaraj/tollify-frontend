"use client";

import { vehicleRegister } from "@/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CarIcon } from "lucide-react";
import Link from "next/link";
import { permanentRedirect } from "next/navigation";
import { useState } from "react";

export default function AddVehiclePage() {
  const [vehicleData, setVehicleData] = useState({
    licensePlate: "",
    model: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    setVehicleData({ ...vehicleData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const res = await vehicleRegister({ ...vehicleData });
    if (res) {
      toast({
        title: "Vehicle Added",
        description: `Your vehicle ${vehicleData.licensePlate} has been added successfully.`,
      });
      return permanentRedirect("/dashboard/vehicles");
    }
    setIsLoading(false);
    return toast({
      title: "Vehicle Added Failed!",
      description: `Something went wrong!`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Add New Vehicle</h1>
        <Button asChild>
          <Link href="/dashboard/vehicles">Back to Vehicles</Link>
        </Button>
      </div>
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CarIcon className="h-6 w-6 text-primary" />
            Vehicle Details
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="plate">License Plate</Label>
              <Input
                id="plate"
                name="licensePlate"
                required
                value={vehicleData.licensePlate}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="model">Model</Label>
              <Input
                id="model"
                name="model"
                required
                value={vehicleData.model}
                onChange={handleChange}
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Submitting..." : "Add Vehicle"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
