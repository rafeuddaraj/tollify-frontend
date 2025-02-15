"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { CreditCardIcon } from "lucide-react"

export default function CreditPurchase() {
  const [amount, setAmount] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const { toast } = useToast()

  const handlePurchase = (e) => {
    e.preventDefault()
    setIsDialogOpen(true)
  }

  const confirmPurchase = () => {
    console.log("Credit purchase:", amount)
    setIsDialogOpen(false)
    toast({
      title: "Purchase Successful",
      description: `You have added $${amount} to your account.`,
    })
    setAmount("")
  }

  return (
    (<div className="container py-8 mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Purchase Credits</h1>
      <Card className="max-w-md mx-auto shadow-lg">
        <CardHeader className="bg-gray-50">
          <CardTitle className="text-xl text-gray-800 flex items-center gap-2">
            <CreditCardIcon className="h-6 w-6 text-primary" />
            Buy Credits
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <form onSubmit={handlePurchase} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="amount">Amount ($)</Label>
              <Input
                id="amount"
                type="number"
                min="1"
                step="1"
                required
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="text-lg" />
            </div>
            <Button type="submit" className="w-full">
              Purchase
            </Button>
          </form>
        </CardContent>
      </Card>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Purchase</DialogTitle>
            <DialogDescription>Are you sure you want to add ${amount} to your account?</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={confirmPurchase}>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>)
  );
}

