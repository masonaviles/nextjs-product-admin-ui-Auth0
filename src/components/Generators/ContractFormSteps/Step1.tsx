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
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>
      <button onClick={onNext} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Next
      </button>
    </div>
  );
});

export default Step1;