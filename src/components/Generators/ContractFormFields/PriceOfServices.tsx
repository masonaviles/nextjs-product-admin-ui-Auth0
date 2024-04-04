import React from 'react';
import { inputClass, labelClass } from './vars';

interface PriceOfServicesProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PriceOfServices: React.FC<PriceOfServicesProps> = ({ value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="price_of_services" className={labelClass}>Price of Services</label>
      <input
        type="number"
        id="price_of_services"
        name="price_of_services"
        value={value}
        onChange={onChange}
        required
        className={inputClass}
      />
    </div>
  );
};

export default PriceOfServices;