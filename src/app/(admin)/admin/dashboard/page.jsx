import { Suspense } from "react";
import PendingApplication from "./_components/_dashboard/PendingApplication";
import TotalCredit from "./_components/_dashboard/TotalCredit";
import TotalUser from "./_components/_dashboard/TotalUser";
import Vehicles from "./_components/_dashboard/Vehicles";
export default function AdminDashboard() {
  return (
    <div className="container space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Suspense
          fallback={
            <div>
              <div className="loader" />
            </div>
          }
        >
          <TotalUser />
        </Suspense>
        <Suspense
          fallback={
            <div>
              <div className="loader" />
            </div>
          }
        >
          <Vehicles />
        </Suspense>
        <Suspense
          fallback={
            <div>
              <div className="loader" />
            </div>
          }
        >
          <TotalCredit />
        </Suspense>
        <Suspense
          fallback={
            <div>
              <div className="loader" />
            </div>
          }
        >
          <PendingApplication />
        </Suspense>
      </div>
    </div>
  );
}
