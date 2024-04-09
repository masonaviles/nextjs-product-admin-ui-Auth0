import ECommerce from "@/components/Dashboard/E-commerce";
import MainDashboard from "@/components/Dashboard/MainDashboard";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export const metadata: Metadata = {
  title:
    "Opal | Automate Your Agency's Customer Contracts",
  description: "Opal | Automate Your Agency's Customer Contracts",
};

export default function Home() {
  return (
    <>
      <UserProvider>
        <DefaultLayout>
          <MainDashboard />
        </DefaultLayout>
      </UserProvider>
    </>
  );
}
