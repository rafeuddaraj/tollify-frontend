"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { CarIcon } from "lucide-react"
import Link from "next/link"

export default function AddVehiclePage() {
  const [vehicleData, setVehicleData] = useState({
    plate: "",
    make: "",
    model: "",
    year: "",
  })
  const { toast } = useToast()

  const handleChange = (e) => {
    setVehicleData({ ...vehicleData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("New vehicle data:", vehicleData)
    toast({
      title: "Vehicle Added",
      description: `Your vehicle ${vehicleData.plate} has been added successfully.`,
    })
    setVehicleData({ plate: "", make: "", model: "", year: "" })
  }

  return (
    (<div className="container mx-auto px-4 py-8">
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
                name="plate"
                required
                value={vehicleData.plate}
                onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="make">Make</Label>
              <Input
                id="make"
                name="make"
                required
                value={vehicleData.make}
                onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="model">Model</Label>
              <Input
                id="model"
                name="model"
                required
                value={vehicleData.model}
                onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="year">Year</Label>
              <Input
                id="year"
                name="year"
                type="number"
                required
                value={vehicleData.year}
                onChange={handleChange} />
            </div>
            <Button type="submit" className="w-full">
              Add Vehicle
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>)
  );
}

