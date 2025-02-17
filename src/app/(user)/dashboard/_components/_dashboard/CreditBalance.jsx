import { getSingleUser } from "@/actions";
import { CreditCardIcon } from "lucide-react";
import StatCard from "../StatCard";

export default async function CreditBalance() {
  const user = await getSingleUser();
  return (
    <>
      <StatCard
        icon={<CreditCardIcon className="h-8 w-8" />}
        title="Credit Balance"
        value={`৳ ${user?.creditBalance}`}
        href="/dashboard/credits"
      />
    </>
  );
}
