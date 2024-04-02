import React from 'react';

interface SubmitButtonProps {
  value: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ value }) => {
  return (
    <div className="button-container text-center">
      <input
        type="submit"
        value={value}
        className="mt-2 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      />
    </div>
  );
};

export default SubmitButton;