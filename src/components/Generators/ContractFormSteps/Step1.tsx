import React, { forwardRef } from 'react';

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
      <button onClick={onNext} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Next
      </button>
    </div>
  );
});

export default Step1;