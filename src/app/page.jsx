import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  NfcIcon as RfidIcon,
  CreditCardIcon,
  CarIcon,
  ComponentIcon as ChipIcon,
} from "lucide-react";
import { auth } from "@/auth";
import Logout from "@/components/common/logout";

export default async function LandingPage() {
  const session = await auth();
  console.log(session);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="container mx-auto py-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600">Tollify</h1>
          <div className="space-x-4">
            {session?.user ? (
              <>
                <Button variant="outline" asChild>
                  <Link
                    href={
                      session?.user?.role === "admin"
                        ? "/admin/dashboard"
                        : "/dashboard"
                    }
                  >
                    Dashboard
                  </Link>
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" asChild>
                  <Link href="/login">Login</Link>
                </Button>
                <Button asChild>
                  <Link href="/register">Register</Link>
                </Button>
              </>
            )}
          </div>
        </nav>
      </header>
      <main className="container mx-auto py-16">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Welcome to Tollify</h2>
          <p className="text-xl text-gray-600 mb-8">
            The Future of Automated Tolling Systems
          </p>
          <Button size="lg" asChild>
            <Link href="/register">Get Started</Link>
          </Button>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<RfidIcon className="h-12 w-12 text-blue-500" />}
            title="RFID Technology"
            description="Seamless and quick toll payments using advanced RFID technology."
          />
          <FeatureCard
            icon={<CreditCardIcon className="h-12 w-12 text-green-500" />}
            title="Easy Credit System"
            description="Convenient digital credit system for hassle-free transactions."
          />
          <FeatureCard
            icon={<CarIcon className="h-12 w-12 text-red-500" />}
            title="Multi-Vehicle Support"
            description="Manage multiple vehicles under a single account with ease."
          />
          <FeatureCard
            icon={<ChipIcon className="h-12 w-12 text-purple-500" />}
            title="AI-Powered"
            description="Intelligent system for optimized toll management and fraud detection."
          />
        </section>
      </main>
      <footer className="bg-gray-100 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-600">
          &copy; 2023 Tollify. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {icon}
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
