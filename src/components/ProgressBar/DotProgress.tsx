interface DotProgressProps {
  currentStep: number;
  totalSteps: number;
  setCurrentStep: (step: number) => void;
}

const DotProgress: React.FC<DotProgressProps> = ({ currentStep, totalSteps, setCurrentStep }) => {
  return (
    <div className="flex justify-center items-center gap-2 dot-progress">
      {Array.from({ length: totalSteps }, (_, index) => (
        <button
          key={index}
          className={`h-2 w-2 rounded-full ${currentStep === index + 1 ? 'bg-blue-700 dark:bg-yellow-100' : 'bg-blue-100 not-active'}`}
          onClick={() => setCurrentStep(index + 1)}
          aria-label={`Go to step ${index + 1}`}
        ></button>
      ))}
    </div>
  );
};

export default DotProgress;