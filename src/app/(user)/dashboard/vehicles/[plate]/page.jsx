import { getSingleVehicle } from "@/actions";
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
import { CarIcon, CreditCardIcon } from "lucide-react";
import Link from "next/link";

function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Intl.DateTimeFormat("en-US", options).format(new Date(dateString));
}

export default async function VehicleSinglePage({ params }) {
  // In a real application, you would fetch the vehicle data based on the plate
  const { plate } = await params;
  const vehicle = await getSingleVehicle(plate);

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
              <p>{vehicle?.licensePlate}</p>
            </div>
            <div>
              <p className="font-semibold">Model:</p>
              <p>{vehicle?.model}</p>
            </div>
            <div>
              <p className="font-semibold">Owner:</p>
              <p>{vehicle?.owner?.name}</p>
            </div>
            <div>
              <p className="font-semibold">Balance:</p>
              <p>৳{vehicle?.owner?.creditBalance}</p>
            </div>
            <div>
              <p className="font-semibold">Verify:</p>
              <p>{vehicle?.rfidTag ? "✅" : "❌"}</p>
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
              {vehicle?.Transactions?.reverse()?.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="text-red-500">
                    -৳{transaction.amount}
                  </TableCell>
                  <TableCell>{formatDate(transaction.timestamp)}</TableCell>
                  <TableCell>{transaction.tollLocation}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
