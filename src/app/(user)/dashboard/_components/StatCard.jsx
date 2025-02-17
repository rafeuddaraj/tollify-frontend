import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function StatCard({ icon, title, value, href }) {
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
