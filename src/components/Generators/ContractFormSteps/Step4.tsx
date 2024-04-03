import React, { forwardRef, useState } from 'react';
import BackButton from '../ContractFormControls/Back';
import NextButton from '../ContractFormControls/Next';
import WorkDelivered from '../ContractFormFields/WorkDelivered';
import PaymentFrequency from '../ContractFormFields/PaymentFrequency';


const Step4 = forwardRef(({ onBack, onNext, formData, setFormData }, ref) => {
    const [workDelivered, setWorkDelivered] = useState('');
    const [paymentFrequency, setPaymentFrequency] = useState('');

  return (
    <div ref={ref}>
      <div className="flex flex-col gap-4 pb-8">
        <WorkDelivered value={workDelivered} onChange={(e) => setWorkDelivered(e.target.value)} />
        <PaymentFrequency value={paymentFrequency} onChange={e => setPaymentFrequency(e.target.value)} />
      </div>
      <div className="flex justify-between">
        <BackButton onClick={onBack} buttonText="Back" />
        <NextButton onClick={onNext} buttonText="Next" />
      </div>
    </div>
  );
});

export default Step4;