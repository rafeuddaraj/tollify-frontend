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
import { HistoryIcon, CreditCardIcon } from "lucide-react";

export default function AdminTransactionManagement() {
  const transactions = [
    {
      id: 1,
      user: "John Doe",
      type: "toll",
      amount: 5,
      date: "2023-06-15",
      location: "Highway 101",
      status: "Completed",
    },
    {
      id: 2,
      user: "Jane Smith",
      type: "credit",
      amount: 20,
      date: "2023-06-14",
      status: "Completed",
    },
    {
      id: 3,
      user: "Alice Johnson",
      type: "toll",
      amount: 3,
      date: "2023-06-12",
      location: "Bridge Crossing",
      status: "Completed",
    },
    {
      id: 4,
      user: "Bob Williams",
      type: "toll",
      amount: 4,
      date: "2023-06-10",
      location: "City Tunnel",
      status: "Completed",
    },
    {
      id: 5,
      user: "Eve Brown",
      type: "credit",
      amount: 50,
      date: "2023-06-08",
      status: "Completed",
    },
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        Transaction Management
      </h1>
      <Card className="shadow-lg">
        <CardHeader className="bg-gray-50">
          <CardTitle className="text-xl text-gray-800 flex items-center gap-2">
            <HistoryIcon className="h-6 w-6 text-primary" />
            All Transactions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Input placeholder="Search transactions..." className="max-w-sm" />
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Details</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="font-medium">
                    {transaction.user}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {transaction.type === "toll" ? (
                        <HistoryIcon className="h-5 w-5 text-blue-500" />
                      ) : (
                        <CreditCardIcon className="h-5 w-5 text-green-500" />
                      )}
                      {transaction.type === "toll"
                        ? "Toll Payment"
                        : "Credit Purchase"}
                    </div>
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
                  <TableCell>{transaction.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
