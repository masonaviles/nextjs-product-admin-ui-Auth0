import React, { useState } from 'react';

import StartDate from './ContractFormFields/StartDate';
import TermsAgree from './ContractFormFields/TermsAgree';
import WorkDelivered from './ContractFormFields/WorkDelivered';
import ClientName from './ContractFormFields/ClientName';
import BusinessType from './ContractFormFields/BusinessType';
import PriceOfServices from './ContractFormFields/PriceOfServices';
import ClientAddress from './ContractFormFields/ClientAddress';
import ClientSignatoryName from './ContractFormFields/ClientSignatoryName';
import ClientSignatoryRole from './ContractFormFields/ClientSignatoryRole';
import Currency from './ContractFormFields/Currency';
import EndDate from './ContractFormFields/EndDate';
import PaymentFrequency from './ContractFormFields/PaymentFrequency';
import ScopeOfWork from './ContractFormFields/ScopeOfWork';
import SendDate from './ContractFormFields/SendDate';
import SubmitButton from './ContractFormControls/Submit';

const ContractForm: React.FC = () => {
  // Initializing state for each form field
  const [sendDate, setSendDate] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientAddress, setClientAddress] = useState('');
  const [clientSignatoryName, setClientSignatoryName] = useState('');
  const [clientSignatoryRole, setClientSignatoryRole] = useState('');
  const [scopeOfWork, setScopeOfWork] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [priceOfServices, setPriceOfServices] = useState('');
  const [currency, setCurrency] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [workDelivered, setWorkDelivered] = useState('');
  const [paymentFrequency, setPaymentFrequency] = useState('');
  const [termsAgree, setTermsAgree] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // formData object with all form fields
    const formData = {
      sendDate,
      clientName,
      clientAddress,
      clientSignatoryName,
      clientSignatoryRole,
      scopeOfWork,
      businessType,
      priceOfServices,
      currency,
      startDate,
      endDate,
      workDelivered,
      paymentFrequency,
      termsAgree,
    };
    console.log("Form Data:", formData);
    // Here you would typically send formData to a server or handle it as needed
  };

  return (
    <div className="relative w-full h-full ">
      <form>
        <StartDate value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        <EndDate value={endDate} onChange={e => setEndDate(e.target.value)} />
        <TermsAgree checked={termsAgree} onChange={(e) => setTermsAgree(e.target.checked)} />
      </form>
    </div>
  );
};
export default ContractForm;