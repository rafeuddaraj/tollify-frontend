import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CarIcon, PlusIcon } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import Vehicles from "./_components/Vehicles";

export default async function VehicleManagement() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        Vehicle Management
      </h1>
      <Card className="shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between bg-gray-50">
          <CardTitle className="text-xl text-gray-800 flex items-center gap-2">
            <CarIcon className="h-6 w-6 text-primary" />
            <span>Your Vehicles</span>
          </CardTitle>
          <Button asChild>
            <Link href="/dashboard/vehicles/add">
              <PlusIcon className="mr-2 h-4 w-4" />
              Add Vehicle
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>License Plate</TableHead>
                <TableHead>Model</TableHead>
                <TableHead>Verify</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <Suspense
              fallback={
                <div>
                  <div className="loader" />
                </div>
              }
            >
              <Vehicles />
            </Suspense>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
