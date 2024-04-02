import React from 'react';

interface ScopeOfWorkProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ScopeOfWork: React.FC<ScopeOfWorkProps> = ({ value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="scope_of_work">Scope of Work</label>
      <input
        type="text"
        id="scope_of_work"
        name="scope_of_work"
        value={value}
        onChange={onChange}
        required
        className="form-control"
      />
    </div>
  );
};

export default ScopeOfWork;