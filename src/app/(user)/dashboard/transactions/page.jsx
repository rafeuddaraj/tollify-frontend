import { getTransactionByUser } from "@/actions";
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
import { HistoryIcon } from "lucide-react";

export default async function TransactionHistory() {
  const transactions = await getTransactionByUser();

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        Transaction History
      </h1>
      <Card className="shadow-lg">
        <CardHeader className="bg-gray-50">
          <CardTitle className="text-xl text-gray-800 flex items-center gap-2">
            <HistoryIcon className="h-6 w-6 text-primary" />
            All Transactions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>{formatDate(transaction.timestamp)}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <HistoryIcon className="h-5 w-5 text-blue-500" />
                      Toll Payment
                    </div>
                  </TableCell>
                  <TableCell className={"text-red-500"}>
                    -৳
                    {transaction.amount}
                  </TableCell>
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
