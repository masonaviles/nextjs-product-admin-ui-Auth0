import React from 'react';

const Step2 = ({ onNext, onBack, formData, setFormData }) => {
  return (
    <div>
      <p>Form fields 2</p>
      <button onClick={onBack}>Back</button>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default Step2;