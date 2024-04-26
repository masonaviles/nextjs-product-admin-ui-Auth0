import MainDashboard from "@/components/Dashboard/MainDashboard";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { ContractProvider } from '@/context/ContractContext';

export const metadata: Metadata = {
  title:
    "Opal | Automate Your Agency's Customer Contracts",
  description: "Opal | Automate Your Agency's Customer Contracts",
};

export default function Home() {
  return (
    <>
        <ContractProvider>
          <DefaultLayout>
            <MainDashboard />
          </DefaultLayout>
        </ContractProvider>
    </>
  );
}
