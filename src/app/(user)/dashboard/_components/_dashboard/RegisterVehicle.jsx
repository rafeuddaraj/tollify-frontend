import { getAllVehicle } from "@/actions";
import { CarIcon } from "lucide-react";
import StatCard from "../StatCard";

export default async function RegisterVehicle() {
  const vehicles = await getAllVehicle();
  return (
    <>
      <StatCard
        icon={<CarIcon className="h-8 w-8" />}
        title="Registered Vehicles"
        value={vehicles.length}
        href="/dashboard/vehicles"
      />
    </>
  );
}
