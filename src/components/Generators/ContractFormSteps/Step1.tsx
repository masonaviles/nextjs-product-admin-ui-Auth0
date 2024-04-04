import React, { forwardRef, useState } from 'react';
import SendDate from '../ContractFormFields/SendDate';
import ClientName from '../ContractFormFields/ClientName';
import ClientAddress from '../ContractFormFields/ClientAddress';
import NextButton from '../ContractFormControls/Next';

interface Step1Props {
  onNext: () => void;
  updateFormData: (newData: Record<string, any>) => void;
}

const Step1 = forwardRef<HTMLDivElement, Step1Props>(({ onNext, updateFormData }, ref) => {

  const [sendDate, setSendDate] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientAddress, setClientAddress] = useState('');

  // Correctly integrated handleInputChange function
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  return (
    <div ref={ref}>
      <div className="flex flex-col gap-4 pb-8">
        <SendDate value={sendDate} onChange={e => { setSendDate(e.target.value); handleInputChange(e); }} />
        <ClientName value={clientName} onChange={e => { setClientName(e.target.value); handleInputChange(e); }}/>
        <ClientAddress value={clientAddress} onChange={e => { setClientAddress(e.target.value); handleInputChange(e); }} />
      </div>
      <div className="flex justify-end">
        <NextButton onClick={onNext} buttonText="Next" />
      </div>
    </div>
  );
});

export default Step1;