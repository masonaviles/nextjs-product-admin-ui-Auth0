import React from 'react';
import { submitButtonClass } from './vars';

interface SubmitButtonProps {
  value: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ value }) => {
  return (
    <div className="button-container text-center">
      <input
        type="submit"
        value={value}
        className={submitButtonClass}
      />
    </div>
  );
};

export default SubmitButton;