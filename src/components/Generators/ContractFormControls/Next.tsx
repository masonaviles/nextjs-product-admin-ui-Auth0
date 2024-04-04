import React from 'react';
import { buttonClass } from '../ContractFormFields/vars';

interface NextButtonProps {
  onClick: () => void;
  className?: string;
  buttonText: string;
}

const NextButton: React.FC<NextButtonProps> = ({ onClick, className, buttonText }) => {
  return (
    <button type="button" onClick={onClick} className={buttonClass}>
      {buttonText}
    </button>
  );
};

export default NextButton;