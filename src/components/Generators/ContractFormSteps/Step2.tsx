import React, { forwardRef, useState } from 'react';
import { buttonClass, inputClass } from '../ContractFormFields/vars';
import NextButton from '../ContractFormControls/Next';
import BackButton from '../ContractFormControls/Back';
import ClientSignatoryName from '../ContractFormFields/ClientSignatoryName';
import ClientSignatoryRole from '../ContractFormFields/ClientSignatoryRole';


const Step2 = forwardRef(({ onNext, onBack, formData, setFormData }, ref) => {

  const [clientSignatoryName, setClientSignatoryName] = useState('');
  const [clientSignatoryRole, setClientSignatoryRole] = useState('');

  return (
    <div ref={ref}>
      <div className="flex flex-col gap-4 pb-8">
        <ClientSignatoryName value={clientSignatoryName} onChange={e => setClientSignatoryName(e.target.value)} />
        <ClientSignatoryRole value={clientSignatoryRole} onChange={e => setClientSignatoryRole(e.target.value)} />
      </div>
      <div className="flex justify-between">
        <BackButton onClick={onBack} buttonText="Back" />
        <NextButton onClick={onNext} buttonText="Next" />
      </div>
    </div>
  );
});

export default Step2;