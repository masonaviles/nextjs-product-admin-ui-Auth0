import React from 'react';
import { inputClass, labelClass } from './vars';

interface EndDateProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const EndDate: React.FC<EndDateProps> = ({ value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="end_date" className={labelClass}>End Date</label>
      <input
        type="date"
        id="end_date"
        name="end_date"
        value={value}
        onChange={onChange}
        required
        className={inputClass}
      />
    </div>
  );
};

export default EndDate;