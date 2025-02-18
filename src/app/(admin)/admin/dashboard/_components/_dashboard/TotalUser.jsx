import { getAllUser } from "@/actions";
import StatCard from "@/app/(user)/dashboard/_components/StatCard";
import { UserIcon } from "lucide-react";

export default async function TotalUser() {
  const users = await getAllUser();
  return (
    <>
      <StatCard
        icon={<UserIcon className="h-8 w-8" />}
        title="Total Users"
        value={users?.length}
        href="/admin/users"
      />
    </>
  );
}
