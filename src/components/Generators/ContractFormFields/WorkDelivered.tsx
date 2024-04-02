import React from 'react';

interface WorkDeliveredProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const WorkDelivered: React.FC<WorkDeliveredProps> = ({ value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="work_delivered">Work Delivered</label>
      <input
        type="text"
        id="work_delivered"
        name="work_delivered"
        value={value}
        onChange={onChange}
        required
        className="form-control"
      />
    </div>
  );
};

export default WorkDelivered;