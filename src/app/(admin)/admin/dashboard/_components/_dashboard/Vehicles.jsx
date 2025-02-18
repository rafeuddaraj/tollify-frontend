import { getAllVehicle } from "@/actions";
import StatCard from "@/app/(user)/dashboard/_components/StatCard";
import { CarIcon } from "lucide-react";

export default async function Vehicles() {
  const vehicles = await getAllVehicle();
  const registeredVehicles = vehicles?.filter((vehicle) => vehicle?.rfidTag);
  return (
    <>
      <StatCard
        icon={<CarIcon className="h-8 w-8" />}
        title="Registered Vehicles"
        value={registeredVehicles?.length}
        href="/admin/vehicles"
      />
    </>
  );
}
