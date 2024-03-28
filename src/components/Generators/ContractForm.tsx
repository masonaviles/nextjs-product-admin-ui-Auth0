import React, { useState } from 'react';

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
    // Constructing formData object with all form fields
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
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Form fields */}
      <div className="form-group">
        <label htmlFor="send_date" className="block text-sm font-medium text-gray-700">Date You'll Be Sending This Contract</label>
        <input type="date" id="send_date" name="send_date" value={sendDate} onChange={e => setSendDate(e.target.value)} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
      </div>

      <div className="form-group">
        <label htmlFor="client_name" className="block text-sm font-medium text-gray-700">Client Name</label>
        <input type="text" id="client_name" name="client_name" value={clientName} onChange={e => setClientName(e.target.value)} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
      </div>

      <div className="form-group">
        <label htmlFor="client_address" className="block text-sm font-medium text-gray-700"><b>Client Province/State</b></label>
        <input type="text" id="client_address" name="client_address" value={clientAddress} onChange={e => setClientAddress(e.target.value)} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
      </div>

      <div className="form-group">
        <label htmlFor="client_signatory_name" className="block text-sm font-medium text-gray-700"><b>Signatory Name</b></label>
        <input type="text" id="client_signatory_name" name="client_signatory_name" value={clientSignatoryName} onChange={e => setClientSignatoryName(e.target.value)} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
      </div>

      <div className="form-group">
        <label htmlFor="client_signatory_role" className="block text-sm font-medium text-gray-700"><b>Signatory Role</b></label>
        <input type="text" id="client_signatory_role" name="client_signatory_role" value={clientSignatoryRole} onChange={e => setClientSignatoryRole(e.target.value)} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
      </div>

      <div className="form-group">
        <label htmlFor="scope_of_work" className="block text-sm font-medium text-gray-700"><b>Scope of Work</b></label>
        <input type="text" id="scope_of_work" name="scope_of_work" value={scopeOfWork} onChange={e => setScopeOfWork(e.target.value)} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
      </div>

      <div className="form-group">
        <label htmlFor="business_type" className="block text-sm font-medium text-gray-700"><b>Type of Client Business</b></label>
        <input type="text" id="business_type" name="business_type" value={businessType} onChange={e => setBusinessType(e.target.value)} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
      </div>

      <div className="form-group">
        <label htmlFor="price_of_services" className="block text-sm font-medium text-gray-700"><b>Price of Services</b></label>
        <input type="number" id="price_of_services" name="price_of_services" value={priceOfServices} onChange={e => setPriceOfServices(e.target.value)} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
      </div>

      <div className="form-group">
        <label htmlFor="currency" className="block text-sm font-medium text-gray-700"><b>Currency</b></label>
        <input type="text" id="currency" name="currency" value={currency} onChange={e => setCurrency(e.target.value)} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
      </div>

      <div className="form-group">
        <label htmlFor="start_date" className="block text-sm font-medium text-gray-700"><b>Start Date</b></label>
        <input type="date" id="start_date" name="start_date" value={startDate} onChange={e => setStartDate(e.target.value)} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
      </div>

      <div className="form-group">
        <label htmlFor="end_date" className="block text-sm font-medium text-gray-700"><b>End Date</b></label>
        <input type="date" id="end_date" name="end_date" value={endDate} onChange={e => setEndDate(e.target.value)} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
      </div>

      <div className="form-group">
        <label htmlFor="work_delivered" className="block text-sm font-medium text-gray-700"><b>What work will you be delivering?</b></label>
        <input type="text" id="work_delivered" name="work_delivered" value={workDelivered} onChange={e => setWorkDelivered(e.target.value)} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
      </div>
      <div className="form-group">
        <label htmlFor="payment_frequency" className="block text-sm font-medium text-gray-700"><b>How frequently will you bill your client?</b></label>
        <input type="text" id="payment_frequency" name="payment_frequency" value={paymentFrequency} onChange={e => setPaymentFrequency(e.target.value)} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
      </div>
      <div className="checkbox-container mt-6">
        <input type="checkbox" id="terms_agree" name="terms_agree" checked={termsAgree} onChange={e => setTermsAgree(e.target.checked)} required className="rounded text-indigo-600 focus:ring-indigo-500" />
        <label htmlFor="terms_agree" className="ml-2 block text-sm text-gray-900">I agree to and have reviewed Opal's <a href="#" className="text-indigo-600 hover:text-indigo-500">Terms and Conditions</a>, and understand that this is not legal advice. We provide information and software and you are responsible for appropriately using this material.</label>
      </div>
      <div className="button-container text-center">
        <input type="submit" value="Create Contract" className="mt-2 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" />
      </div>
    </form>
  );
};
export default ContractForm;