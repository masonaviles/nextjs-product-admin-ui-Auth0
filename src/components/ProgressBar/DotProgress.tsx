import React from 'react';

interface DotPaginationProps {
  currentStep: number;
  totalSteps: number;
}

const DotPagination: React.FC<DotPaginationProps> = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex justify-center space-x-2">
      {Array.from({ length: totalSteps }, (_, index) => (
        <span
          key={index}
          className={`inline-block h-3 w-3 rounded-full ${index + 1 === currentStep ? 'bg-blue-500' : 'bg-gray-300'}`}
        ></span>
      ))}
    </div>
  );
};

export default DotPagination;