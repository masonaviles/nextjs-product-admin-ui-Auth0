'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Contract } from '@/types/contract';
import { getContracts } from '@/lib/fetch';

interface ContractContextType {
    contracts: Contract[];
    addContract: (contract: Contract) => void;
    deleteContract: (contractId: number) => void;
}

const ContractContext = createContext<ContractContextType>({
    contracts: [],
    addContract: () => {},
    deleteContract: () => {}
});

export const ContractProvider = ({ children }: { children: React.ReactNode }) => {
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

    // useEffect(() => {
    //     const fetchContracts = async () => {
    //       try {
    //         const response = await getContracts();
    //         setContracts(response);
    //       } catch (error) {
    //         console.error("Failed to fetch contracts, using default data", error);
    //       }
    //     };
    //     fetchContracts();
    // }, []);

  const addContract = (contract: Contract) => {
    setContracts([...contracts, contract]);
  };

  const deleteContract = (contractId: number) => {
    setContracts(contracts.filter(contract => contract.id !== contractId));
  };


  return (
    <ContractContext.Provider value={{ contracts, addContract, deleteContract }}>
      {children}
    </ContractContext.Provider>
  );
};

export const useContracts = () => useContext(ContractContext);
