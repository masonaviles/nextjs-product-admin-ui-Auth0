import React, { forwardRef, useState } from 'react';
import { buttonClass, inputClass } from '../ContractFormFields/vars';
import SendDate from '../ContractFormFields/SendDate';
import ClientName from '../ContractFormFields/ClientName';
import ClientAddress from '../ContractFormFields/ClientAddress';
import NextButton from '../ContractFormControls/Next';


const Step1 = forwardRef(({ onNext }, ref) => {

  const [sendDate, setSendDate] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientAddress, setClientAddress] = useState('');

  return (
    <div ref={ref}>
      <div className="flex flex-col gap-4 pb-8">
        <SendDate value={sendDate} onChange={e => setSendDate(e.target.value)} />
        <ClientName value={clientName} onChange={e => setClientName(e.target.value)}/>
        <ClientAddress value={clientAddress} onChange={e => setClientAddress(e.target.value)} />
      </div>
      <NextButton onClick={onNext} buttonText="Next" />
    </div>
  );
});

export default Step1;