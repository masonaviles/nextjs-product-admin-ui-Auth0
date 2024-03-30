import React from 'react';

const Step3 = ({ onBack, onSubmit, formData }) => {
  return (
    <div>
      <p>Form fields 3</p>
      <button onClick={onBack}>Back</button>
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default Step3;