import { Contract } from "@/types/contract";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getContracts } from "@/lib/fetch";



const ContractsOverview = () => {
  const [contracts, setContracts] = useState<Contract[]>([
    {
      id: 1,
      csrfmiddlewaretoken: "Nj9QQXHyfh0V4qZTuW5yrpuQxPsjeGMGYli0Y0prlAv3MaRAj25BXTLeRvHz8Yvi",
      send_date: "2024-10-01",
      client_name: "Client Name 1",
      client_address: "NV",
      client_signatory_name: "Sig Name",
      client_signatory_role: "Sig Role",
      scope_of_work: "Scope of Work",
      business_type: "Large Company",
      price_of_services: "100000",
      currency: "USD",
      start_date: "2024-10-02",
      end_date: "2024-10-28",
      terms_agree: true,
      payment_frequency: "Bi-Weekly",
      pdf: "#"
    },
    {
      id: 2,
      csrfmiddlewaretoken: "Nj9QQXHyfh0V4qZTuW5yrpuQxPsjeGMGYli0Y0prlAv3MaRAj25BXTLeRvHz8Yvi",
      send_date: "2024-10-01",
      client_name: "Client Name 2",
      client_address: "NV",
      client_signatory_name: "Sig Name",
      client_signatory_role: "Sig Role",
      scope_of_work: "Scope of Work",
      business_type: "Small Company",
      price_of_services: "30000",
      currency: "USD",
      start_date: "2024-10-05",
      end_date: "2024-10-28",
      terms_agree: true,
      payment_frequency: "Monthly",
      pdf: "#"
    },
    {
      id: 3,
      csrfmiddlewaretoken: "Nj9QQXHyfh0V4qZTuW5yrpuQxPsjeGMGYli0Y0prlAv3MaRAj25BXTLeRvHz8Yvi",
      send_date: "2024-10-01",
      client_name: "Client Name 3",
      client_address: "NV",
      client_signatory_name: "Sig Name",
      client_signatory_role: "Sig Role",
      scope_of_work: "Scope of Work",
      business_type: "Small Company",
      price_of_services: "80000",
      currency: "USD",
      start_date: "2024-10-11",
      end_date: "2024-10-28",
      terms_agree: true,
      payment_frequency: "Weekly",
      pdf: "#"
    }
  ]);

  useEffect(() => {
    const fetchContracts = async () => {
      try {
        const loadedContracts = await getContracts();
        if (loadedContracts && loadedContracts.length > 0) {
          setContracts(loadedContracts);
        }
      } catch (error) {
        console.error("Failed to fetch contracts:", error);      }
    };
  
    fetchContracts();
  }, []);

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        All Contracts
      </h4>

      <div className="bg-gray-100 dark:bg-gray-800 border-b border-stroke dark:border-strokedark grid grid-cols-2 sm:grid-cols-6 font-bold p-2.5 xl:p-5">
        <div className="text-black dark:text-white text-left">Client Name</div>
        <div className="text-black dark:text-white text-center">Business Type</div>
        <div className="text-black dark:text-white text-center">Price of Services</div>
        <div className="text-black dark:text-white text-center">Payment Frequency</div>
        <div className="text-black dark:text-white text-center">Start Date</div>
        <div className="text-black dark:text-white text-center">PDF Link</div>
      </div>

      {contracts.map((contract, key) => (
        <div
          className={`grid grid-cols-2 sm:grid-cols-6 ${
            key === contracts.length - 1
              ? ""
              : "border-b border-stroke dark:border-strokedark"
          }`}
          key={key}
        >
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <p className="hidden text-black dark:text-white sm:block">
              {contract.client_name}
            </p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">{contract.business_type}</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-meta-3">${contract.price_of_services}</p>
          </div>

          <div className="flex items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-black dark:text-white">{contract.payment_frequency}</p>
          </div>

          <div className="flex items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-meta-5">{contract.start_date}</p>
          </div>

          <div className="flex items-center justify-center p-2.5 sm:flex xl:p-5">
            <Link href={contract.pdf} target="_blank" className="bg-blue-500 dark:bg-blue-700 dark:hover:bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">View Contract</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContractsOverview;
