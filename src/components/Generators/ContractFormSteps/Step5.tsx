import React, { forwardRef, useState, Ref } from 'react';
import BackButton from '../ContractFormControls/Back';
import StartDate from '../ContractFormFields/StartDate';
import EndDate from '../ContractFormFields/EndDate';
import TermsAgree from '../ContractFormFields/TermsAgree';
import SubmitButton from '../ContractFormControls/Submit';

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

    // Generic input change handler for text inputs
    const handleInputChange = (name: string, value: string) => {
      // Update local state
      if (name === 'startDate') {
        setStartDate(value);
      } else if (name === 'endDate') {
        setEndDate(value);
      }

      // Update shared form data
      updateFormData({ [name]: value });
    };

    // Specific change handler for checkbox
    const handleCheckboxChange = (name: string, checked: boolean) => {
      setTermsAgree(checked); // Update local state
      updateFormData({ [name]: checked }); // Update shared form data
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault(); // Prevent the default form submission behavior

      // API call to submit formData
      // try {
      //   const response = await fetch('YOUR_API_ENDPOINT', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify(formData),
      //   });

      //   if (!response.ok) {
      //     throw new Error('Network response was not ok');
      //   }

        // Handle successful submission here
        // For example, you could clear the form, show a success message, or redirect the user
        console.log('Form submitted successfully', formData);
      // } catch (error) {
      //   console.error('Error submitting form:', error);
      // }
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