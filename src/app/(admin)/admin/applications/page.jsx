"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { ClipboardListIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function AdminApplicationManagement() {
  const [applications, setApplications] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@example.com",
      licensePlate: "DEF456",
      dateApplied: "2023-06-16",
      status: "Pending",
    },
    {
      id: 2,
      name: "Bob Williams",
      email: "bob@example.com",
      licensePlate: "GHI789",
      dateApplied: "2023-06-15",
      status: "Pending",
    },
    {
      id: 3,
      name: "Charlie Brown",
      email: "charlie@example.com",
      licensePlate: "JKL012",
      dateApplied: "2023-06-14",
      status: "Pending",
    },
  ]);

  const { toast } = useToast();

  const handleApprove = (id) => {
    setApplications(
      applications.map((app) =>
        app.id === id ? { ...app, status: "Approved" } : app
      )
    );
    toast({
      title: "Application Approved",
      description: "The user application has been approved.",
    });
  };

  const handleReject = (id) => {
    setApplications(
      applications.map((app) =>
        app.id === id ? { ...app, status: "Rejected" } : app
      )
    );
    toast({
      title: "Application Rejected",
      description: "The user application has been rejected.",
      variant: "destructive",
    });
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        Application Management
      </h1>
      <Card className="shadow-lg">
        <CardHeader className="bg-gray-50">
          <CardTitle className="text-xl text-gray-800 flex items-center gap-2">
            <ClipboardListIcon className="h-6 w-6 text-primary" />
            Pending Applications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Input placeholder="Search applications..." className="max-w-sm" />
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>License Plate</TableHead>
                <TableHead>Date Applied</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applications.map((application) => (
                <TableRow key={application.id}>
                  <TableCell className="font-medium">
                    {application.name}
                  </TableCell>
                  <TableCell>{application.email}</TableCell>
                  <TableCell>{application.licensePlate}</TableCell>
                  <TableCell>{application.dateApplied}</TableCell>
                  <TableCell>{application.status}</TableCell>
                  <TableCell>
                    {application.status === "Pending" && (
                      <>
                        <Button
                          variant="outline"
                          size="sm"
                          className="mr-2"
                          onClick={() => handleApprove(application.id)}
                        >
                          Approve
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleReject(application.id)}
                        >
                          Reject
                        </Button>
                      </>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
