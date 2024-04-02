import React from 'react';

interface StartDateProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StartDate: React.FC<StartDateProps> = ({ value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="start_date">Start Date</label>
      <input
        type="date"
        id="start_date"
        name="start_date"
        value={value}
        onChange={onChange}
        required
        className="form-control"
      />
    </div>
  );
};

export default StartDate;