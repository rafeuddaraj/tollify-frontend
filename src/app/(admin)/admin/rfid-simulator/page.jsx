"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { WifiIcon } from "lucide-react";

export default function RFIDSimulator() {
  const [rfidData, setRfidData] = useState("");

  const simulateRFIDScan = () => {
    // In a real application, this would interact with actual RFID hardware
    const simulatedData = Math.random()
      .toString(36)
      .substr(2, 10)
      .toUpperCase();
    setRfidData(simulatedData);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">RFID Simulator</h1>
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>RFID Reader</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button onClick={simulateRFIDScan} className="w-full">
            <WifiIcon className="mr-2 h-4 w-4" />
            Simulate RFID Scan
          </Button>
          <Input
            value={rfidData}
            readOnly
            placeholder="RFID Data will appear here"
          />
        </CardContent>
      </Card>
    </div>
  );
}
