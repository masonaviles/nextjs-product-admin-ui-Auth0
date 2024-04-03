import React from 'react';
import { inputClass, labelClass } from './vars';

interface StartDateProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StartDate: React.FC<StartDateProps> = ({ value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="start_date" className={labelClass}>Start Date</label>
      <input
        type="date"
        id="start_date"
        name="start_date"
        value={value}
        onChange={onChange}
        required
        className={inputClass}
      />
    </div>
  );
};

export default StartDate;