import React, { forwardRef, useState } from 'react';
import BackButton from '../ContractFormControls/Back';
import StartDate from '../ContractFormFields/StartDate';
import EndDate from '../ContractFormFields/EndDate';
import TermsAgree from '../ContractFormFields/TermsAgree';


const Step4 = forwardRef(({ onBack, onSubmit, formData, setFormData }, ref) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [termsAgree, setTermsAgree] = useState(false);

  return (
    <div ref={ref}>
      <div className="flex flex-col gap-4 pb-8">
        <StartDate value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        <EndDate value={endDate} onChange={e => setEndDate(e.target.value)} />
        <TermsAgree checked={termsAgree} onChange={(e) => setTermsAgree(e.target.checked)} />
      </div>
      <div className="flex justify-between">
        <BackButton onClick={onBack} buttonText="Back" />
      </div>
    </div>
  );
});

export default Step4;