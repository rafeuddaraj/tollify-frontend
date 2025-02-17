import { Suspense } from "react";
import CreditBalance from "./_components/_dashboard/CreditBalance";
import CreditTransaction from "./_components/_dashboard/CreditTransaction";
import RegisterVehicle from "./_components/_dashboard/RegisterVehicle";
import TotalTransaction from "./_components/_dashboard/TotalTransaction";

export default function UserDashboard() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        Welcome, John Doe
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Suspense
          fallback={
            <div>
              <div className="loader" />
            </div>
          }
        >
          <RegisterVehicle />
        </Suspense>
        <Suspense
          fallback={
            <div>
              <div className="loader" />
            </div>
          }
        >
          <CreditBalance />
        </Suspense>
        <Suspense
          fallback={
            <div>
              <div className="loader" />
            </div>
          }
        >
          <TotalTransaction />
        </Suspense>
        <Suspense
          fallback={
            <div>
              <div className="loader" />
            </div>
          }
        >
          <CreditTransaction />
        </Suspense>
      </div>
    </div>
  );
}
