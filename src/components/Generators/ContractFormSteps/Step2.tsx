import React, { forwardRef } from 'react';

const Step2 = forwardRef(({ onNext, onBack, formData, setFormData }, ref) => {
  return (
    <div ref={ref}>
      <p>Form fields 2</p>
      {/* Example form field */}
      <div className="form-group">
        <label htmlFor="exampleInput">Example Input</label>
        <input
          type="text"
          id="exampleInput"
          value={formData.exampleInput || ''}
          onChange={(e) => setFormData({ ...formData, exampleInput: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>
      <div className="flex justify-between">
        <button onClick={onBack} className="mt-4 bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded">
          Back
        </button>
        <button onClick={onNext} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Next
        </button>
      </div>
    </div>
  );
});

export default Step2;