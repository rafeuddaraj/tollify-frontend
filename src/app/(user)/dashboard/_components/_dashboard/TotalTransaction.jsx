import { getTransactionByUser } from "@/actions";
import { HistoryIcon } from "lucide-react";
import StatCard from "../StatCard";

export default async function TotalTransaction() {
  const transaction = await getTransactionByUser();

  return (
    <>
      <StatCard
        icon={<HistoryIcon className="h-8 w-8" />}
        title="Total Transactions"
        value={transaction.length}
        href="/dashboard/transactions"
      />
    </>
  );
}
