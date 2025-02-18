import { getCreditTransaction } from "@/actions";
import StatCard from "@/app/(user)/dashboard/_components/StatCard";
import { CreditCardIcon } from "lucide-react";

export default async function TotalCredit() {
  const credits = (await getCreditTransaction()) || [];
  const totalCredit = credits.reduce((sum, credit) => sum + credit?.amount, 0);

  return (
    <>
      <StatCard
        icon={<CreditCardIcon className="h-8 w-8" />}
        title="Total Credits"
        value={`৳${totalCredit}`}
        href="/admin/transactions"
      />
    </>
  );
}
