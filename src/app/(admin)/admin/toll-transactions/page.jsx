import { getTransactionByUser } from "@/actions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import formatDate from "@/utils/formatedDate";
import { HistoryIcon } from "lucide-react";

export default async function AdminTollTransactionManagement() {
  const transactions = await getTransactionByUser();

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        Toll Transaction
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
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction?.id}>
                  <TableCell className="font-medium">
                    {transaction?.user?.name}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <HistoryIcon className="h-5 w-5 text-blue-500" />
                      Toll Payment
                    </div>
                  </TableCell>
                  <TableCell className={"text-red-500"}>
                    -৳{transaction.amount}
                  </TableCell>
                  <TableCell>{formatDate(transaction.timestamp)}</TableCell>
                  <TableCell>{transaction.tollLocation || "N/A"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
