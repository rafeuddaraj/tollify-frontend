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
import { CarIcon, PlusIcon } from "lucide-react";
import Link from "next/link";

export default function VehicleManagement() {
  const vehicles = [
    {
      plate: "ABC123",
      make: "Toyota",
      model: "Camry",
      year: 2022,
      balance: 50,
    },
    { plate: "XYZ789", make: "Honda", model: "Civic", year: 2023, balance: 30 },
  ];

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
                <TableHead>Make</TableHead>
                <TableHead>Model</TableHead>
                <TableHead>Year</TableHead>
                <TableHead>Balance</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {vehicles.map((vehicle) => (
                <TableRow key={vehicle.plate}>
                  <TableCell className="font-medium">{vehicle.plate}</TableCell>
                  <TableCell>{vehicle.make}</TableCell>
                  <TableCell>{vehicle.model}</TableCell>
                  <TableCell>{vehicle.year}</TableCell>
                  <TableCell>${vehicle.balance}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/vehicles/${vehicle.plate}`}>Edit</Link>
                    </Button>
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
