import React from 'react';

interface CurrencyProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Currency: React.FC<CurrencyProps> = ({ value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="currency">Currency</label>
      <input
        type="text"
        id="currency"
        name="currency"
        value={value}
        onChange={onChange}
        required
        className="form-control"
      />
    </div>
  );
};

export default Currency;