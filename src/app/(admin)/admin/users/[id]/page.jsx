import { getSingleUser } from "@/actions";
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
import formatDate from "@/utils/formatedDate";
import { CarIcon, CreditCardIcon, UserIcon } from "lucide-react";
import Link from "next/link";

export default async function UserSinglePage({ params }) {
  // In a real application, you would fetch the user data based on the ID
  const { id } = await params;
  const user = await getSingleUser(id);

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
                <TableHead>Model</TableHead>
                <TableHead>RFID TAG</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {user.vehicles.map((vehicle) => (
                <TableRow key={vehicle.licensePlate}>
                  <TableCell className="font-medium">
                    {vehicle.licensePlate}
                  </TableCell>
                  <TableCell>{vehicle.model}</TableCell>
                  <TableCell>{vehicle.rfidTag || "N/A"}</TableCell>
                  <TableCell>
                    <Button>
                      <Link href={`/admin/users/${id}/${vehicle?.id}`}>
                        Visit
                      </Link>
                    </Button>
                  </TableCell>
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
            Recent Credit Transactions
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
              {user.Credits.reverse()
                .slice(0, 3)
                .map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell>Credit Purchase</TableCell>
                    <TableCell className="text-green-500">
                      +{transaction?.amount}
                    </TableCell>
                    <TableCell>{formatDate(transaction?.timestamp)}</TableCell>
                    <TableCell>
                      {transaction?.transactionType || "N/A"}
                    </TableCell>
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
            Recent Toll Transactions
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
              {user.Transactions.reverse()
                .slice(0, 3)
                .map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell>Credit Purchase</TableCell>
                    <TableCell className="text-red-500">
                      -{transaction?.amount}
                    </TableCell>
                    <TableCell>{formatDate(transaction?.timestamp)}</TableCell>
                    <TableCell>{transaction?.tollLocation || "N/A"}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
