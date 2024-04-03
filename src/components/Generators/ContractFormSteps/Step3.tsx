import React, { forwardRef, useState } from 'react';
import BackButton from '../ContractFormControls/Back';
import NextButton from '../ContractFormControls/Next';
import BusinessType from '../ContractFormFields/BusinessType';
import ScopeOfWork from '../ContractFormFields/ScopeOfWork';
import PriceOfServices from '../ContractFormFields/PriceOfServices';
import Currency from '../ContractFormFields/Currency';

const Step3 = forwardRef(({ onBack, onNext, formData, setFormData }, ref) => {
  const [scopeOfWork, setScopeOfWork] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [priceOfServices, setPriceOfServices] = useState('');
  const [currency, setCurrency] = useState('');

  return (
    <div ref={ref}>
      <div className="flex flex-col gap-4 pb-8">
        <BusinessType value={businessType} onChange={e => setBusinessType(e.target.value)} />
        <ScopeOfWork value={scopeOfWork} onChange={e => setScopeOfWork(e.target.value)} />
        <PriceOfServices value={priceOfServices} onChange={e => setPriceOfServices(e.target.value)} />
        <Currency value={currency} onChange={e => setCurrency(e.target.value)} />
      </div>
      <div className="flex justify-between">
        <BackButton onClick={onBack} buttonText="Back" />
        <NextButton onClick={onNext} buttonText="Next" />
      </div>
    </div>
  );
});

export default Step3;