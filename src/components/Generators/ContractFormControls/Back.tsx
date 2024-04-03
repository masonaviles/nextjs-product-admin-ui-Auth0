import React from 'react';

interface BackButtonProps {
  onClick: () => void;
  className?: string;
  buttonText: string;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick, className, buttonText }) => {
  return (
    <button onClick={onClick} className={className}>
      {buttonText}
    </button>
  );
};

export default BackButton;