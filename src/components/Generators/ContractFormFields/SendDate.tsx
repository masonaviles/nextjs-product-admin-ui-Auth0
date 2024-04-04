import React from 'react';
import { inputClass, labelClass } from './vars';

interface SendDateProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SendDate: React.FC<SendDateProps> = ({ value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="send_date" className={labelClass}>Send Date</label>
      <input
        type="date"
        id="send_date"
        name="send_date"
        value={value}
        onChange={onChange}
        required
        className={inputClass}
      />
    </div>
  );
};

export default SendDate;