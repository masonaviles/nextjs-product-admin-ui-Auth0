import React from 'react';

interface EndDateProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const EndDate: React.FC<EndDateProps> = ({ value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="end_date">End Date</label>
      <input
        type="date"
        id="end_date"
        name="end_date"
        value={value}
        onChange={onChange}
        required
        className="form-control"
      />
    </div>
  );
};

export default EndDate;