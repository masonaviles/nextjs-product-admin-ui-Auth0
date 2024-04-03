import React, { forwardRef } from 'react';
import { buttonClass, inputClass } from '../ContractFormFields/vars';

const Step1 = forwardRef(({ onNext, formData, setFormData }, ref) => {

  return (
    <div ref={ref}>
      <p>Form fields 1</p>
      {/* Example form field */}
      <div className="form-group">
        <label htmlFor="exampleInput1">Example Input 1</label>
        <input
          type="text"
          id="exampleInput1"
          value={formData.exampleInput1 || ''}
          onChange={(e) => setFormData({ ...formData, exampleInput1: e.target.value })}
          className="block w-full border-none border-b-2 border-gray-800 bg-transparent text-yellow-100 text-3xl font-bold border-b border-white"
        />
      </div>
      <button onClick={onNext} className={buttonClass}>
        Next
      </button>
    </div>
  );
});

export default Step1;