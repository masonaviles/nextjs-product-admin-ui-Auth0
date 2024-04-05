import React, { useState } from 'react';
import Step1 from './ContractFormSteps/Step1';
import Step2 from './ContractFormSteps/Step2';
import Step3 from './ContractFormSteps/Step3';
import Step4 from './ContractFormSteps/Step4';
import Step5 from './ContractFormSteps/Step5';
import ProgressBar from '@/components/ProgressBar/ProgressBar';
import DotProgress from '@/components/ProgressBar/DotProgress';
import { AnimatePresence, motion } from 'framer-motion';
import { submitButtonClass } from './ContractFormFields/vars';

const ContractFormSteps: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // API call to submit formData
    // try {
    //   const response = await fetch('YOUR_API_ENDPOINT', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   if (!response.ok) {
    //     throw new Error('Network response was not ok');
    //   }

      // Handle successful submission here
      // For example, you could clear the form, show a success message, or redirect the user
      console.log('Form submitted successfully', formData);
    // } catch (error) {
    //   console.error('Error submitting form:', error);
    // }
  };

  const updateFormData = (newData: Record<string, any>) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      ...newData
    }));
  };

  const stepComponents = [
    <Step1 key="step1" onNext={nextStep} updateFormData={updateFormData} />,
    <Step2 key="step2" onNext={nextStep} onBack={prevStep} updateFormData={updateFormData} />,
    <Step3 key="step3" onNext={nextStep} onBack={prevStep} updateFormData={updateFormData} formData={formData} setFormData={setFormData} />,
    <Step4 key="step4" onNext={nextStep} onBack={prevStep} updateFormData={updateFormData} formData={formData} setFormData={setFormData} />,
    <Step5 key="step5" onBack={prevStep} onSubmit={handleSubmit} updateFormData={updateFormData} formData={formData} setFormData={setFormData} />
  ];

  // Ensure the submit button is only shown on the last step and triggers handleSubmit
  const renderSubmitButton = () => {
    return (
      <AnimatePresence>
        {currentStep === stepComponents.length && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <button 
              type="submit" 
              className={submitButtonClass}
            >
              Create Contract
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <ProgressBar currentStep={currentStep} totalSteps={stepComponents.length} />
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
      <div className="flex justify-center mt-4">
        {renderSubmitButton()}
      </div>
      <DotProgress currentStep={currentStep} totalSteps={stepComponents.length} setCurrentStep={setCurrentStep} />
    </form>
  );
};

export default ContractFormSteps;