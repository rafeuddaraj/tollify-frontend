import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  UserIcon,
  CarIcon,
  CreditCardIcon,
  ClipboardListIcon,
} from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="container space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={<UserIcon className="h-8 w-8" />}
          title="Total Users"
          value="1,234"
          href="/admin/users"
        />
        <StatCard
          icon={<CarIcon className="h-8 w-8" />}
          title="Registered Vehicles"
          value="2,567"
          href="/admin/vehicles"
        />
        <StatCard
          icon={<CreditCardIcon className="h-8 w-8" />}
          title="Total Credits"
          value="$45,678"
          href="/admin/transactions"
        />
        <StatCard
          icon={<ClipboardListIcon className="h-8 w-8" />}
          title="Pending Applications"
          value="23"
          href="/admin/applications"
        />
      </div>
    </div>
  );
}

function StatCard({ icon, title, value, href }) {
  return (
    <Link href={href} className="block">
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
