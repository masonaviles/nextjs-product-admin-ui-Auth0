import React from 'react';
import { inputClass, labelClass } from './vars';

interface BusinessTypeProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const BusinessType: React.FC<BusinessTypeProps> = ({ value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="business_type" className={labelClass}>Business Type</label>
      <select
        id="business_type"
        name="business_type"
        value={value}
        onChange={onChange}
        required
        className={inputClass}
      >
        <option value="">Select Business Type</option>
        <option value="small">Small Business</option>
        <option value="medium">Medium Business</option>
        <option value="large">Large Business</option>
      </select>
    </div>
  );
};

export default BusinessType;