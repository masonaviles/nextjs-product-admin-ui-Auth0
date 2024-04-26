"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import ContractFormSteps from "@/components/Generators/ContractFormSteps";


const Generators = () => {
  return (
    <>
      <Breadcrumb pageName="Contract Generator" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-1">
        <div className="flex flex-col gap-9 justify-start lg:mt-5">
          <ContractFormSteps />
        </div>
      </div>

    </>
  );
};

export default Generators;
