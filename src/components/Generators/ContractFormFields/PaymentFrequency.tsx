import React from 'react';
import { inputClass, labelClass } from './vars';

interface PaymentFrequencyProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PaymentFrequency: React.FC<PaymentFrequencyProps> = ({ value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="payment_frequency" className={labelClass}>Payment Frequency</label>
      <input
        type="text"
        id="payment_frequency"
        name="payment_frequency"
        value={value}
        onChange={onChange}
        
        className={inputClass}
      />
    </div>
  );
};

export default PaymentFrequency;