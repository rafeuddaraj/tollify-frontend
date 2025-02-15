import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { HistoryIcon, CreditCardIcon } from "lucide-react";

export default function TransactionHistory() {
  const transactions = [
    {
      id: 1,
      type: "toll",
      amount: 5,
      date: "2023-06-15",
      location: "Highway 101",
    },
    { id: 2, type: "credit", amount: 20, date: "2023-06-14" },
    {
      id: 3,
      type: "toll",
      amount: 3,
      date: "2023-06-12",
      location: "Bridge Crossing",
    },
    {
      id: 4,
      type: "toll",
      amount: 4,
      date: "2023-06-10",
      location: "City Tunnel",
    },
    { id: 5, type: "credit", amount: 50, date: "2023-06-08" },
  ];

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
                  <TableCell>{transaction.date}</TableCell>
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
