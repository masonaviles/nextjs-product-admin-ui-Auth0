import React, { forwardRef, useState, Ref } from 'react';
import BackButton from '../ContractFormControls/Back';
import StartDate from '../ContractFormFields/StartDate';
import EndDate from '../ContractFormFields/EndDate';
import TermsAgree from '../ContractFormFields/TermsAgree';
import SubmitButton from '../ContractFormControls/Submit';
import { addContract } from '@/lib/fetch';

interface Step5Props {
  onBack: () => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void; // Updated to match handleSubmit
  updateFormData: (newData: Record<string, any>) => void;
  formData: any;
  setFormData: (formData: any) => void;
}

const Step5 = forwardRef<HTMLDivElement, Step5Props>(({ onBack, onSubmit, updateFormData, formData, setFormData }, ref) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [termsAgree, setTermsAgree] = useState(false);

    const handleInputChange = (name: string, value: string) => {
      if (name === 'startDate') {
        setStartDate(value);
      } else if (name === 'endDate') {
        setEndDate(value);
      }

      updateFormData({ [name]: value });
    };

    const handleCheckboxChange = (name: string, checked: boolean) => {
      setTermsAgree(checked);
      updateFormData({ [name]: checked });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log('Form submitted successfully', formData);
      try {
        await addContract(formData);
        console.log('Contract added successfully');
      } catch (error) {
        console.error('Failed to add contract', error);
        if (error.response) {
          console.error('Response:', error.response.data);
        }
      }
    };

  return (
    <div ref={ref}>
      <div className="flex flex-col gap-4 pb-8">
        <StartDate value={startDate} onChange={(e) => handleInputChange('startDate', e.target.value)} />
        <EndDate value={endDate} onChange={(e) => handleInputChange('endDate', e.target.value)} />
        <TermsAgree checked={termsAgree} onChange={(e) => handleCheckboxChange('termsAgree', e.target.checked)} />
      </div>
      <div className="flex justify-between">
        <BackButton onClick={onBack} buttonText="Back" />
        <SubmitButton onSubmit={handleSubmit} buttonText="Submit" />
      </div>
    </div>
  );
});

Step5.displayName = 'Step5';

export default Step5;