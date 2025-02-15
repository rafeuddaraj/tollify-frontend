import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
} from "@/components/ui/sidebar";
import {
  HomeIcon,
  UsersIcon,
  CreditCardIcon,
  ClipboardListIcon,
  LogOutIcon,
} from "lucide-react";
import ActiveLink from "./_components/ActiveLink";

export default function AdminLayout({ children }) {
  return (
    <div className="flex">
      <SidebarProvider>
        <Sidebar className="py-8 bg-transparent px-3">
          <SidebarHeader>
            <Link href={"/admin/dashboard"}>
              <h2 className="text-2xl font-bold px-4 py-2 text-primary">
                Tollify Admin
              </h2>
            </Link>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <ActiveLink href="/admin/dashboard">
                    <HomeIcon className="mr-2 h-4 w-4" />
                    Dashboard
                  </ActiveLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <ActiveLink href="/admin/users">
                    <UsersIcon className="mr-2 h-4 w-4" />
                    Users
                  </ActiveLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <ActiveLink href="/admin/transactions">
                    <CreditCardIcon className="mr-2 h-4 w-4" />
                    Transactions
                  </ActiveLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <ActiveLink href="/admin/applications">
                    <ClipboardListIcon className="mr-2 h-4 w-4" />
                    Applications
                  </ActiveLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <div className="mt-auto p-4">
            <Button variant="outline" className="w-full">
              <LogOutIcon className="mr-2 h-4 w-4" />
              Log Out
            </Button>
          </div>
        </Sidebar>
        <main className="flex-1 overflow-y-auto p-8">{children}</main>
      </SidebarProvider>
    </div>
  );
}
