"use client";

import { updateVehicleAction } from "@/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TableCell } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export default function ActionTable({ application }) {
  const { toast } = useToast();
  const [rfidTag, setRfidTag] = useState("");
  const [loading, setLoading] = useState(false);

  const handleApprove = async (id) => {
    setLoading(true);
    try {
      const resData = await updateVehicleAction(id, { rfidTag });
      if (resData) {
        setLoading(false);
        return toast({
          title: "Application Approved",
          description: "The user application has been approved.",
        });
      }
      throw Error("");
    } catch {
      toast({
        title: "Server Error",
        description: "There was an problem!",
      });
    }
    setLoading(false);
  };

  const handleReject = async (id) => {
    setLoading(true);
    try {
      const resData = await updateVehicleAction(id, { rfidTag: null });

      if (resData) {
        setLoading(false);
        return toast({
          title: "Application Rejected",
          description: "The user application has been rejected.",
          variant: "destructive",
        });
      }
      throw Error("");
    } catch {
      toast({
        title: "Server Error",
        description: "There was an problem!",
      });
    }
    setLoading(false);
    return null;
  };
  return (
    <>
      <TableCell>
        <div>
          <Input
            value={rfidTag}
            onChange={(e) => setRfidTag(e.target.value)}
            placeholder="Enter RFID TAG Address"
            type="text"
          />
        </div>
      </TableCell>
      <TableCell>
        <>
          <Button
            disabled={loading}
            variant="outline"
            size="sm"
            className="mr-2"
            onClick={() => handleApprove(application.id)}
          >
            Approve
          </Button>
          <Button
            disabled={loading}
            variant="outline"
            size="sm"
            onClick={() => handleReject(application.id)}
          >
            Reject
          </Button>
        </>
      </TableCell>
    </>
  );
}
