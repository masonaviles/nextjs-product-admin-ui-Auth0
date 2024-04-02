import React from 'react';

interface PaymentFrequencyProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PaymentFrequency: React.FC<PaymentFrequencyProps> = ({ value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="payment_frequency">Payment Frequency</label>
      <input
        type="text"
        id="payment_frequency"
        name="payment_frequency"
        value={value}
        onChange={onChange}
        required
        className="form-control"
      />
    </div>
  );
};

export default PaymentFrequency;