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
import { UserIcon } from "lucide-react";
import Link from "next/link";

export default function AdminUserManagement() {
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      vehicles: 2,
      creditBalance: 50,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      vehicles: 1,
      creditBalance: 30,
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice@example.com",
      vehicles: 3,
      creditBalance: 75,
    },
    {
      id: 4,
      name: "Bob Williams",
      email: "bob@example.com",
      vehicles: 1,
      creditBalance: 15,
    },
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">User Management</h1>
      <Card className="shadow-lg">
        <CardHeader className="bg-gray-50">
          <CardTitle className="text-xl text-gray-800 flex items-center gap-2">
            <UserIcon className="h-6 w-6 text-primary" />
            All Users
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Input placeholder="Search users..." className="max-w-sm" />
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Vehicles</TableHead>
                <TableHead>Credit Balance</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.vehicles}</TableCell>
                  <TableCell>${user.creditBalance}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/admin/users/${user.id}`}>View Details</Link>
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
