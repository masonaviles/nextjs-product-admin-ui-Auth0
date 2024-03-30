import React, { forwardRef } from 'react';

const Step3 = forwardRef(({ onBack, onSubmit, formData, setFormData }, ref) => {
  return (
    <div ref={ref}>
      <p>Form fields 3</p>
      {/* Example form field */}
      <div className="form-group">
        <label htmlFor="finalExampleInput">Final Example Input</label>
        <input
          type="text"
          id="finalExampleInput"
          value={formData.finalExampleInput || ''}
          onChange={(e) => setFormData({ ...formData, finalExampleInput: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>
      <div className="flex justify-between">
        <button onClick={onBack} className="mt-4 bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded">
          Back
        </button>
        <button onClick={onSubmit} className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </div>
    </div>
  );
});

export default Step3;