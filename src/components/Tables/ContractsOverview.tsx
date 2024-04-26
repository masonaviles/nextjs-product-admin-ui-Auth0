import { Contract } from "@/types/contract";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import Link from "next/link";
import { useContracts } from "@/context/ContractContext";


const ContractsOverview = () => {
  const { contracts, addContract, deleteContract } = useContracts();
  const [selectedContract, setSelectedContract] = useState<Contract | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleDelete = (contractId: number) => {
    deleteContract(contractId);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openModal = (contract: Contract) => {
    setSelectedContract(contract);
    setModalIsOpen(true);
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          All Contracts
        </h4>
        <Link href="/contracts/generator" className="bg-green-500 dark:bg-green-700 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Create Contract
        </Link>
      </div>

      <div className="bg-gray-100 dark:bg-gray-800 border-b border-stroke dark:border-strokedark grid grid-cols-2 sm:grid-cols-6 font-bold p-2.5 xl:p-5">
        <div className="text-black dark:text-white text-left">Client Name</div>
        <div className="text-black dark:text-white text-center">Business Type</div>
        <div className="text-black dark:text-white text-center">Price of Services</div>
        <div className="text-black dark:text-white text-center">Payment Frequency</div>
        <div className="text-black dark:text-white text-center">Start Date</div>
        <div className="text-black dark:text-white text-center">Contract</div>
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

          <div className="flex items-center justify-between p-2.5 sm:flex xl:p-5">
            <button onClick={() => openModal(contract)} className="bg-blue-500 dark:bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              View
            </button>
            <button className="rounded border border-stroke px-6 py-2 font-medium text-black hover:shadow-1 dark:hover:text-black hover:bg-gray-300 dark:border-strokedark dark:text-white" onClick={() => handleDelete(contract.id)}>Delete</button>
          </div>
        </div>
      ))}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Contract Modal"
        ariaHideApp={false}
        className="fixed lg:inset-x-30 overflow-y-auto h-full w-full flex items-start justify-start dark:bg-black dark:bg-opacity-80"
        style={{
          content: {

          }
        }}
      >
        <div className="relative top-30 mx-auto p-5 border-2 border-stroke w-2/3 shadow-lg rounded-md bg-white dark:bg-boxdark bg-opacity-100 dark:border-strokedark z-10">
          <button onClick={closeModal} className="absolute top-0 right-2 text-black dark:text-gray-300 p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Close</button>
          <h1 className="contract-title dark:text-white">Contract {selectedContract?.id} for {selectedContract?.client_name}</h1>
        </div>
      </Modal>
    </div>
  );
};

export default ContractsOverview;
