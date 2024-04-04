import React, { forwardRef, useState } from 'react';
import NextButton from '../ContractFormControls/Next';
import BackButton from '../ContractFormControls/Back';
import ClientSignatoryName from '../ContractFormFields/ClientSignatoryName';
import ClientSignatoryRole from '../ContractFormFields/ClientSignatoryRole';

interface Step2Props {
  onNext: () => void;
  onBack: () => void;
  updateFormData: (newData: Record<string, any>) => void;
}

const Step2 = forwardRef<HTMLDivElement, Step2Props>(({ onNext, onBack, updateFormData }, ref) => {

  const [clientSignatoryName, setClientSignatoryName] = useState('');
  const [clientSignatoryRole, setClientSignatoryRole] = useState('');

  // Define the handleInputChange function
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  return (
    <div ref={ref}>
      <div className="flex flex-col gap-4 pb-8">
        <ClientSignatoryName value={clientSignatoryName} onChange={e => { setClientSignatoryName(e.target.value); handleInputChange(e); }} />
        <ClientSignatoryRole value={clientSignatoryRole} onChange={e => { setClientSignatoryRole(e.target.value); handleInputChange(e); }} />
      </div>
      <div className="flex justify-between">
        <BackButton onClick={onBack} buttonText="Back" />
        <NextButton onClick={onNext} buttonText="Next" />
      </div>
    </div>
  );
});

Step2.displayName = 'Step2';

export default Step2;

