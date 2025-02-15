"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CreditCardIcon } from "lucide-react";

export default function CreditPurchasePage() {
  const [amount, setAmount] = useState("");
  const { toast } = useToast();

  const handlePurchase = (e) => {
    e.preventDefault();
    // Here you would typically process the credit purchase
    console.log("Credit purchase:", amount);
    toast({
      title: "Purchase Successful",
      description: `You have added $${amount} to your account.`,
    });
    setAmount("");
  };

  return (
    <div className="mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        Purchase Credits
      </h1>
      <Card className="w-1/2 mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCardIcon className="h-6 w-6 text-primary" />
            Buy Credits
          </CardTitle>
        </CardHeader>
        <CardContent>
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
                className="text-lg"
              />
            </div>
            <Button type="submit" className="w-full">
              Purchase Credits
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
