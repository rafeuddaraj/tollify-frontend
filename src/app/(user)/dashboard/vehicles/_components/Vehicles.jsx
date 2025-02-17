import { getAllVehicle } from "@/actions";
import { Button } from "@/components/ui/button";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import Link from "next/link";

export default async function Vehicles() {
  const vehicles = await getAllVehicle();
  return (
    <TableBody>
      {vehicles?.map((vehicle) => (
        <TableRow key={vehicle.plate}>
          <TableCell className="font-medium">{vehicle.licensePlate}</TableCell>
          <TableCell>{vehicle?.model || "N/A"}</TableCell>
          <TableCell>{vehicle?.rfidTag ? "✅" : "❌"}</TableCell>
          <TableCell>
            <Button variant="outline" size="sm" asChild>
              <Link href={`/dashboard/vehicles/${vehicle.id}`}>Visit</Link>
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
