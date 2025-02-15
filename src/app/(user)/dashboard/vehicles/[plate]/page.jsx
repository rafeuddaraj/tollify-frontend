import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CarIcon, CreditCardIcon } from "lucide-react";
import Link from "next/link";

export default function VehicleSinglePage({ params }) {
  // In a real application, you would fetch the vehicle data based on the plate
  const vehicle = {
    plate: params.plate,
    make: "Toyota",
    model: "Camry",
    year: 2022,
    owner: "John Doe",
    balance: 50,
    recentTransactions: [
      { id: 1, amount: 5, date: "2023-06-15", location: "Highway 101" },
      { id: 2, amount: 3, date: "2023-06-12", location: "Bridge Crossing" },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Vehicle Details</h1>
        <Button asChild>
          <Link href="/dashboard/vehicles">Back to Vehicles</Link>
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CarIcon className="h-6 w-6 text-primary" />
            Vehicle Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <p className="font-semibold">License Plate:</p>
              <p>{vehicle.plate}</p>
            </div>
            <div>
              <p className="font-semibold">Make:</p>
              <p>{vehicle.make}</p>
            </div>
            <div>
              <p className="font-semibold">Model:</p>
              <p>{vehicle.model}</p>
            </div>
            <div>
              <p className="font-semibold">Year:</p>
              <p>{vehicle.year}</p>
            </div>
            <div>
              <p className="font-semibold">Owner:</p>
              <p>{vehicle.owner}</p>
            </div>
            <div>
              <p className="font-semibold">Balance:</p>
              <p>${vehicle.balance}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCardIcon className="h-6 w-6 text-primary" />
            Recent Transactions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Amount</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Location</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {vehicle.recentTransactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="text-red-500">
                    -${transaction.amount}
                  </TableCell>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.location}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
