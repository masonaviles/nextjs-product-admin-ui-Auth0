interface DotProgressProps {
  currentStep: number;
  totalSteps: number;
}

const DotProgress: React.FC<DotProgressProps> = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex justify-center items-center gap-2 dot-progress">
      {Array.from({ length: totalSteps }, (_, index) => (
        <span
          key={index}
          className={`h-2 w-2 rounded-full ${currentStep === index + 1 ? 'bg-gray-700 dark:bg-yellow-100' : 'bg-gray-300 not-active'}`}
        ></span>
      ))}
    </div>
  );
};

export default DotProgress;