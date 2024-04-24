import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Image from "next/image";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Link from "next/link";
import SettingsSidebar from "@/components/Sidebar/SettingsSidebar";

export const metadata: Metadata = {
  title: "Opal Settings | Opal - Opal Dashboard Template",
  description:
    "This is Opal Settings page for Opal - Opal Tailwind CSS Admin Dashboard Template",
};

const BillingSettings = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="Billing Settings" />

        <div className="grid grid-cols-7 gap-8">

          <div className="col-span-1 xl:col-span-2">
            <SettingsSidebar />
          </div>

          <div className="col-span-8 xl:col-span-3">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Billing Cards
                </h3>
              </div>
              <div className="p-7">
                
              </div>
            </div>
          </div>
          <div className="col-span-3 xl:col-span-2">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Card #0000
                </h3>
              </div>
              <div className="p-7">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default BillingSettings;
