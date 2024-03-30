import React, { useState } from 'react';
import Step1 from './ContractFormSteps/Step1';
import Step2 from './ContractFormSteps/Step2';
import Step3 from './ContractFormSteps/Step3';
import ProgressBar from '@/components/ProgressBar/ProgressBar';
import { AnimatePresence, motion } from 'framer-motion';

const ContractFormSteps: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  const handleSubmit = () => {
    // Handle form submission
  };

  const stepComponents = [
    <Step1 key="step1" onNext={nextStep} formData={formData} setFormData={setFormData} />,
    <Step2 key="step2" onNext={nextStep} onBack={prevStep} formData={formData} setFormData={setFormData} />,
    <Step3 key="step3" onBack={prevStep} onSubmit={handleSubmit} formData={formData} />
  ];

  return (
    <div>
      <ProgressBar currentStep={currentStep} totalSteps={3} />
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
        >
          {stepComponents[currentStep - 1]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ContractFormSteps;