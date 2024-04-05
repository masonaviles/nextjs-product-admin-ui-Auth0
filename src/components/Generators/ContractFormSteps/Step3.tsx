import React, { forwardRef, useState, Ref } from 'react';
import BackButton from '../ContractFormControls/Back';
import NextButton from '../ContractFormControls/Next';
import BusinessType from '../ContractFormFields/BusinessType';
import ScopeOfWork from '../ContractFormFields/ScopeOfWork';
import PriceOfServices from '../ContractFormFields/PriceOfServices';
import Currency from '../ContractFormFields/Currency';

interface Step3Props {
  onBack: () => void;
  onNext: () => void;
  updateFormData: (newData: Record<string, any>) => void;
  formData: any;
  setFormData: (formData: any) => void;
}

const Step3 = forwardRef<HTMLDivElement, Step3Props>(
  ({ onBack, onNext, updateFormData, formData, setFormData }, ref) => {
  const [scopeOfWork, setScopeOfWork] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [priceOfServices, setPriceOfServices] = useState('');
  const [currency, setCurrency] = useState('');

  // Generic input change handler
  const handleInputChange = (name: string, value: string) => {
    // Update local state
    switch(name) {
      case 'businessType':
        setBusinessType(value);
        break;
      case 'scopeOfWork':
        setScopeOfWork(value);
        break;
      case 'priceOfServices':
        setPriceOfServices(value);
        break;
      case 'currency':
        setCurrency(value);
        break;
      default:
        break;
    }

    // Update shared form data
    updateFormData({ [name]: value });
  };

  return (
    <div ref={ref}>
      <div className="flex flex-col gap-4 pb-8">
        <BusinessType value={businessType} onChange={e => handleInputChange('businessType', e.target.value)} />
        <ScopeOfWork value={scopeOfWork} onChange={e => handleInputChange('scopeOfWork', e.target.value)} />
        <PriceOfServices value={priceOfServices} onChange={e => handleInputChange('priceOfServices', e.target.value)} />
        <Currency value={currency} onChange={e => handleInputChange('currency', e.target.value)} />
      </div>
      <div className="flex justify-between">
        <BackButton onClick={onBack} buttonText="Back" />
        <NextButton onClick={onNext} buttonText="Next" />
      </div>
    </div>
  );
});

Step3.displayName = 'Step3';

export default Step3;

