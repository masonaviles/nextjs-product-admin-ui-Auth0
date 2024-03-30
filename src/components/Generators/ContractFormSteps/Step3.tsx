import React from 'react';

const Step3 = ({ onBack, onSubmit, formData }) => {
  return (
    <div>
      {/* Your form fields for step 3 */}
      <button onClick={onBack}>Back</button>
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default Step3;