import React, { forwardRef, useState, Ref } from 'react';
import BackButton from '../ContractFormControls/Back';
import NextButton from '../ContractFormControls/Next';
import WorkDelivered from '../ContractFormFields/WorkDelivered';
import PaymentFrequency from '../ContractFormFields/PaymentFrequency';

interface Step4Props {
  onBack: () => void;
  onNext: () => void;
  updateFormData: (newData: Record<string, any>) => void;
  formData: any;
  setFormData: (formData: any) => void;
}

const Step4 = forwardRef<HTMLDivElement, Step4Props>(
    ({ onBack, onNext, updateFormData, formData, setFormData }, ref) => {
      const [workDelivered, setWorkDelivered] = useState('');
      const [paymentFrequency, setPaymentFrequency] = useState('');
  
      // Generic input change handler
      const handleInputChange = (name: string, value: string) => {
        // Update local state
        if (name === 'workDelivered') {
          setWorkDelivered(value);
        } else if (name === 'paymentFrequency') {
          setPaymentFrequency(value);
        }

        // Update shared form data
        updateFormData({ [name]: value });
      };

      return (
        <div ref={ref}>
          <div className="flex flex-col gap-4 pb-8">
            <WorkDelivered value={workDelivered} onChange={(e) => handleInputChange('workDelivered', e.target.value)} />
            <PaymentFrequency value={paymentFrequency} onChange={(e) => handleInputChange('paymentFrequency', e.target.value)} />
          </div>
          <div className="flex justify-between">
            <BackButton onClick={onBack} buttonText="Back" />
            <NextButton onClick={onNext} buttonText="Next" />
          </div>
        </div>
      );
    }
);

Step4.displayName = 'Step4';

export default Step4;

