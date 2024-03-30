import React, { useState } from 'react';
import Step1 from './ContractFormSteps/Step1';
import Step2 from './ContractFormSteps/Step2';
import Step3 from './ContractFormSteps/Step3';
import ProgressBar from '@/components/ProgressBar/ProgressBar';
import { AnimatePresence, motion } from 'framer-motion';

const ContractFormSteps: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({ /* initial form data */ });

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  const handleSubmit = () => {
    // Handle form submission
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 onNext={nextStep} formData={formData} setFormData={setFormData} />;
      case 2:
        return <Step2 onNext={nextStep} onBack={prevStep} formData={formData} setFormData={setFormData} />;
      case 3:
        return <Step3 onBack={prevStep} onSubmit={handleSubmit} formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <ProgressBar currentStep={currentStep} totalSteps={3} />
      <AnimatePresence>
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          {renderStep()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ContractFormSteps;