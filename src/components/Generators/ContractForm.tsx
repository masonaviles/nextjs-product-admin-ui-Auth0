import React, { useState } from 'react';

const ContractForm: React.FC = () => {
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
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="send_date"><b>Date You'll Be Sending This Contract</b></label>
        <input type="date" id="send_date" name="send_date" value={sendDate} onChange={e => setSendDate(e.target.value)} required />
      </div>

      <div className="form-group">
        <label htmlFor="client_name"><b>Client Name</b></label>
        <input type="text" id="client_name" name="client_name" value={clientName} onChange={e => setClientName(e.target.value)} required />
      </div>

      {/* Continue with the same pattern for other fields */}
      
      <div className="form-group">
        <label htmlFor="client_address"><b>Client Province/State</b></label>
        <input type="text" id="client_address" name="client_address" value={clientAddress} onChange={e => setClientAddress(e.target.value)} required />
      </div>

      <div className="form-group">
        <label htmlFor="client_signatory_name"><b>Signatory Name</b></label>
        <input type="text" id="client_signatory_name" name="client_signatory_name" value={clientSignatoryName} onChange={e => setClientSignatoryName(e.target.value)} required />
      </div>

      {/* ...repeat for each input field... */}

      <div className="checkbox-container" style={{ margin: '20px 0' }}>
        <input type="checkbox" id="terms_agree" name="terms_agree" checked={termsAgree} onChange={e => setTermsAgree(e.target.checked)} required />
        <label htmlFor="terms_agree" style={{ display: 'inline', color: 'white' }}>I agree to and have reviewed Opal's <a href="#" style={{ color: '#f8f9fa' }}>Terms and Conditions</a>, and understand that this is not legal advice. We provide information and software and you are responsible for appropriately using this material.</label>
      </div>

      <div className="button-container" style={{ textAlign: 'center' }}>
        <input type="submit" value="Create Contract" className="button-style" />
      </div>
    </form>
  );
};

export default ContractForm;
