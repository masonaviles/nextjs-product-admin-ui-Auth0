import React from 'react';

const Step1 = ({ onNext, formData, setFormData }) => {
  return (
    <div>
      {/* Your form fields for step 1 */}
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default Step1;