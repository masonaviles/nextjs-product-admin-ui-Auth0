import React from 'react';
import { submitButtonClass } from '../ContractFormFields/vars';

interface SubmitButtonProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  buttonText: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onSubmit, buttonText }) => {
  return (
    <div className="button-container text-center">
      <input
        type="submit"
        value={buttonText}
        className={submitButtonClass}
      />
    </div>
  );
};

export default SubmitButton;