import React from 'react';
import { inputClass, labelClass } from './vars';

interface CurrencyProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Currency: React.FC<CurrencyProps> = ({ value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="currency" className={labelClass}>Currency</label>
      <input
        type="text"
        id="currency"
        name="currency"
        value={value}
        onChange={onChange}
        required
        className={inputClass}
      />
    </div>
  );
};

export default Currency;