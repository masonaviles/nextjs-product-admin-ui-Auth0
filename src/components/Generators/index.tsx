"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import ContractForm from "@/components/Generators/ContractForm";
import ContractFormSteps from "@/components/Generators/ContractFormSteps";

const Generators = () => {
  return (
    <>
      <Breadcrumb pageName="Contract Generator" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">

          <ContractFormSteps />
          {/* <ContractForm /> */}
          
        </div>
      </div>

    </>
  );
};

export default Generators;
