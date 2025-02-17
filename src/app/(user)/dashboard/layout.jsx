import ActiveLink from "@/app/(admin)/admin/_components/ActiveLink";
import Logout from "@/components/common/logout";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { CarIcon, CreditCardIcon, HistoryIcon } from "lucide-react";
import Link from "next/link";

export default function AdminLayout({ children }) {
  return (
    <div className="flex">
      <SidebarProvider>
        <Sidebar className="py-8 bg-transparent px-3">
          <SidebarHeader>
            <Link href={"/dashboard"}>
              <h2 className="text-2xl font-bold px-4 py-2 text-primary">
                Dashboard
              </h2>
            </Link>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <ActiveLink href="/dashboard/vehicles">
                    <CarIcon className="mr-2 h-4 w-4" />
                    Registered Vehicles
                  </ActiveLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <ActiveLink href="/dashboard/credits">
                    <CreditCardIcon className="mr-2 h-4 w-4" />
                    Credit Balance
                  </ActiveLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <ActiveLink href="/dashboard/transactions">
                    <HistoryIcon className="mr-2 h-4 w-4" />
                    Total Transactions
                  </ActiveLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <ActiveLink href="/dashboard/credit-transactions">
                    <HistoryIcon className="mr-2 h-4 w-4" />
                    Total Credit Transactions
                  </ActiveLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <div className="mt-auto p-4">
            <Logout />
          </div>
        </Sidebar>
        <main className="flex-1 overflow-y-auto p-8">{children}</main>
      </SidebarProvider>
    </div>
  );
}
