"use client";

import { buyCreditAction } from "@/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CreditCardIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreditPurchasePage() {
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const handlePurchase = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const resp = await buyCreditAction({ amount: parseFloat(amount) });
      if (resp) {
        toast({
          title: "Purchase Successful",
          description: `You have added ৳${amount} to your account.`,
        });
        return router.push("/dashboard");
      }
      throw Error("");
    } catch (err) {
      toast({
        title: "Purchase Failed",
        description: `There was an problem!`,
      });
    }
    setIsLoading(false);
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
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Purchasing Credits..." : "Purchase Credits"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
