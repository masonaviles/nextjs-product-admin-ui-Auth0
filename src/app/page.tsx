import ECommerce from "@/components/Dashboard/E-commerce";
import MainDashboard from "@/components/Dashboard/MainDashboard";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title:
    "Next.js E-commerce Dashboard | Opal - Next.js Dashboard Template",
  description: "This is Next.js Home for Opal Dashboard Template",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <MainDashboard />
      </DefaultLayout>
    </>
  );
}
