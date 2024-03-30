import React from 'react';

const Step2 = ({ onNext, onBack, formData, setFormData }) => {
  return (
    <div>
      {/* Your form fields for step 2 */}
      <button onClick={onBack}>Back</button>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default Step2;