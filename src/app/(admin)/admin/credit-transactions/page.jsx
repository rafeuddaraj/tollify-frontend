import { getCreditTransaction } from "@/actions";
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
import { CreditCardIcon, HistoryIcon } from "lucide-react";

export default async function CreditTransactions() {
  const transactions = await getCreditTransaction();

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Credits History</h1>
      <Card className="shadow-lg">
        <CardHeader className="bg-gray-50">
          <CardTitle className="text-xl text-gray-800 flex items-center gap-2">
            <HistoryIcon className="h-6 w-6 text-primary" />
            All Credit Transactions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions?.length &&
                transactions?.map((transaction) => (
                  <TableRow key={transaction?.id}>
                    <TableCell>{transaction?.user?.name}</TableCell>
                    <TableCell>{formatDate(transaction?.timestamp)}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <CreditCardIcon className="h-5 w-5 text-green-500" />
                        Credit Purchase
                      </div>
                    </TableCell>
                    <TableCell className={"text-green-500"}>
                      +৳
                      {transaction.amount}
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
