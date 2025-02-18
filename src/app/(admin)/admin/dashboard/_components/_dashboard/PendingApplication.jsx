import { getAllVehicle } from "@/actions";
import StatCard from "@/app/(user)/dashboard/_components/StatCard";
import { ClipboardListIcon } from "lucide-react";

export default async function PendingApplication() {
  const vehicles = await getAllVehicle();
  const pendingVehicles = vehicles?.filter((vehicle) => !vehicle?.rfidTag);
  return (
    <>
      <StatCard
        icon={<ClipboardListIcon className="h-8 w-8" />}
        title="Pending Applications"
        value={pendingVehicles?.length}
        href="/admin/applications"
      />
    </>
  );
}
