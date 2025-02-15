"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { CreditCardIcon } from "lucide-react"

export default function TollPaymentPage() {
  const [amount, setAmount] = useState("")
  const [vehicle, setVehicle] = useState("")
  const { toast } = useToast()

  const handlePayment = (e) => {
    e.preventDefault()
    // Here you would typically process the payment
    console.log("Toll payment:", { amount, vehicle })
    toast({
      title: "Payment Successful",
      description: `You have paid $${amount} for vehicle ${vehicle}.`,
    })
    setAmount("")
    setVehicle("")
  }

  return (
    (<div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Toll Payment</h1>
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCardIcon className="h-6 w-6 text-primary" />
            Pay Toll
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handlePayment} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="vehicle">Select Vehicle</Label>
              <Select value={vehicle} onValueChange={setVehicle}>
                <SelectTrigger id="vehicle">
                  <SelectValue placeholder="Select a vehicle" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ABC123">ABC123 - Toyota Camry</SelectItem>
                  <SelectItem value="XYZ789">XYZ789 - Honda Civic</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="amount">Amount ($)</Label>
              <Input
                id="amount"
                type="number"
                min="0.01"
                step="0.01"
                required
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="text-lg" />
            </div>
            <Button type="submit" className="w-full">
              Pay Toll
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>)
  );
}

