import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Image from "next/image";
import { Metadata } from "next";
import NoSidebarLayout from "@/components/Layouts/NoSidebarLayout";

export const metadata: Metadata = {
  title: "Logged Out",
  description:
    "This is Opal Settings page for Opal - Opal Tailwind CSS Admin Dashboard Template",
};

const Logout = () => {
  return (
    <NoSidebarLayout>
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="Logout" />

      </div>
    </NoSidebarLayout>
  );
};

export default Logout;
