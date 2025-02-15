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
import { UserIcon, CarIcon, CreditCardIcon } from "lucide-react";
import Link from "next/link";

export default function UserSinglePage({ params }) {
  // In a real application, you would fetch the user data based on the ID
  const user = {
    id: params.id,
    name: "John Doe",
    email: "john@example.com",
    creditBalance: 100,
    vehicles: [
      { plate: "ABC123", make: "Toyota", model: "Camry", year: 2022 },
      { plate: "XYZ789", make: "Honda", model: "Civic", year: 2023 },
    ],
    recentTransactions: [
      {
        id: 1,
        type: "toll",
        amount: 5,
        date: "2023-06-15",
        location: "Highway 101",
      },
      { id: 2, type: "credit", amount: 20, date: "2023-06-14" },
    ],
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">User Details</h1>
        <Button asChild>
          <Link href="/admin/users">Back to Users</Link>
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UserIcon className="h-6 w-6 text-primary" />
            User Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold">Name:</p>
              <p>{user.name}</p>
            </div>
            <div>
              <p className="font-semibold">Email:</p>
              <p>{user.email}</p>
            </div>
            <div>
              <p className="font-semibold">Credit Balance:</p>
              <p>${user.creditBalance}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CarIcon className="h-6 w-6 text-primary" />
            Registered Vehicles
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>License Plate</TableHead>
                <TableHead>Make</TableHead>
                <TableHead>Model</TableHead>
                <TableHead>Year</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {user.vehicles.map((vehicle) => (
                <TableRow key={vehicle.plate}>
                  <TableCell className="font-medium">{vehicle.plate}</TableCell>
                  <TableCell>{vehicle.make}</TableCell>
                  <TableCell>{vehicle.model}</TableCell>
                  <TableCell>{vehicle.year}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
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
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {user.recentTransactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>
                    {transaction.type === "toll"
                      ? "Toll Payment"
                      : "Credit Purchase"}
                  </TableCell>
                  <TableCell
                    className={
                      transaction.type === "toll"
                        ? "text-red-500"
                        : "text-green-500"
                    }
                  >
                    {transaction.type === "toll" ? "-" : "+"}$
                    {transaction.amount}
                  </TableCell>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.location || "N/A"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
