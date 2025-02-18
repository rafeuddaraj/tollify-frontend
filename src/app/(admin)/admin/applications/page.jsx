import { getAllVehicle } from "@/actions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import formatDate from "@/utils/formatedDate";
import { ClipboardListIcon } from "lucide-react";
import ActionTable from "./_components/ActionTable";

export default async function AdminApplicationManagement() {
  const vehicles = await getAllVehicle();

  const applications = vehicles?.filter((vehicle) => vehicle?.rfidTag === null);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        Application Management
      </h1>
      <Card className="shadow-lg">
        <CardHeader className="bg-gray-50">
          <CardTitle className="text-xl text-gray-800 flex items-center gap-2">
            <ClipboardListIcon className="h-6 w-6 text-primary" />
            Pending Applications
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* <div className="mb-4">
            <Input
              value={rfidTag}
              onChange={(e) => setRfidTag(e.target.value)}
              placeholder="Search applications..."
              className="max-w-sm"
            />
          </div> */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>License Plate</TableHead>
                <TableHead>Date Applied</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>RFID TAG</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applications.map((application) => (
                <TableRow key={application.id}>
                  <TableCell className="font-medium">
                    {application?.owner?.name}
                  </TableCell>
                  <TableCell>{application.owner?.email}</TableCell>
                  <TableCell>{application.licensePlate}</TableCell>
                  <TableCell>{formatDate(application.createdAt)}</TableCell>
                  <TableCell>Pending</TableCell>
                  <ActionTable application={application}/>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
