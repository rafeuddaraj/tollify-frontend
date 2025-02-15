import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CarIcon, CreditCardIcon, HistoryIcon } from "lucide-react";
import Link from "next/link";

export default function UserDashboard() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        Welcome, John Doe
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <StatCard
          icon={<CarIcon className="h-8 w-8" />}
          title="Registered Vehicles"
          value="2"
          href="/dashboard/vehicles"
        />
        <StatCard
          icon={<CreditCardIcon className="h-8 w-8" />}
          title="Credit Balance"
          value="$80"
          href="/dashboard/credits"
        />
        <StatCard
          icon={<HistoryIcon className="h-8 w-8" />}
          title="Total Transactions"
          value="15"
          href="/dashboard/transactions"
        />
      </div>
    </div>
  );
}

function StatCard({ icon, title, value, href }) {
  return (
    <Link href={href}>
      <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-600">
            {title}
          </CardTitle>
          <div className="text-primary">{icon}</div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-gray-800">{value}</div>
        </CardContent>
      </Card>
    </Link>
  );
}
