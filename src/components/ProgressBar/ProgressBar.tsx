import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  // Calculate the width of the progress bar in percentage
  const progressWidth = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="progress-bar w-full bg-gray-200 h-2.5 dark:bg-gray-700 relative">
      <div
        className="h-2.5"
        style={{ width: `${progressWidth}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;