import React from 'react';
import { inputClass, labelClass } from './vars';

interface ScopeOfWorkProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ScopeOfWork: React.FC<ScopeOfWorkProps> = ({ value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="scope_of_work" className={labelClass}>Scope of Work</label>
      <input
        type="text"
        id="scope_of_work"
        name="scope_of_work"
        value={value}
        onChange={onChange}
        required
        className={inputClass}
      />
    </div>
  );
};

export default ScopeOfWork;