import React from 'react';

interface PriceOfServicesProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PriceOfServices: React.FC<PriceOfServicesProps> = ({ value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="price_of_services">Price of Services</label>
      <input
        type="number"
        id="price_of_services"
        name="price_of_services"
        value={value}
        onChange={onChange}
        required
        className="form-control"
      />
    </div>
  );
};

export default PriceOfServices;