import React from 'react';

const Step1 = ({ onNext, formData, setFormData }) => {
  return (
    <div>
      <p>Form fields 1</p>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default Step1;