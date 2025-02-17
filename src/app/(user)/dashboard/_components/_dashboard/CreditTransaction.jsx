import { getCreditTransaction } from "@/actions";
import { HistoryIcon } from "lucide-react";
import StatCard from "../StatCard";

export default async function CreditTransaction() {
  const transaction = await getCreditTransaction();
  return (
    <>
      <StatCard
        icon={<HistoryIcon className="h-8 w-8" />}
        title="Credit Transaction"
        value={`${transaction?.length}`}
        href="/dashboard/credit-transaction"
      />
    </>
  );
}
