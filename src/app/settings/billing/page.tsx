import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import SettingsSidebar from "@/components/Sidebar/SettingsSidebar";
import SettingsBilling from "@/components/Tables/SettingsBilling";

export const metadata: Metadata = {
  title: "Opal Settings | Opal - Opal Dashboard Template",
  description:
    "This is Opal Settings page for Opal - Opal Tailwind CSS Admin Dashboard Template",
};

const BillingSettings = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto w-full max-w-1000">
        <Breadcrumb pageName="Billing Settings" />

        <div className="grid grid-cols-1 md:grid-cols-7 gap-8">

          <div className="col md:col-span-2 xl:col-span-2">
            <SettingsSidebar />
          </div>

          <div className="col md:col-span-5 xl:col-span-5">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Billing Cards
                </h3>
              </div>
              <div className="p-7">
                <SettingsBilling />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default BillingSettings;
