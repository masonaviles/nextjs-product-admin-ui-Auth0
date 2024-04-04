import React from 'react';
import { inputClass, labelClass } from './vars';

interface ClientNameProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ClientName: React.FC<ClientNameProps> = ({ value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="client_name" className={labelClass}>Client Name</label>
      <input
        type="text"
        id="client_name"
        name="client_name"
        value={value}
        onChange={onChange}
        required
        className={inputClass}
      />
    </div>
  );
};

export default ClientName;