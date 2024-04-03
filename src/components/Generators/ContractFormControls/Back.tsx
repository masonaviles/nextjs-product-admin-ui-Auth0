import React from 'react';
import { buttonClass } from '../ContractFormFields/vars';

interface BackButtonProps {
  onClick: () => void;
  className?: string;
  buttonText: string;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick, className, buttonText }) => {
  return (
    <button onClick={onClick} className={buttonClass}>
      {buttonText}
    </button>
  );
};

export default BackButton;