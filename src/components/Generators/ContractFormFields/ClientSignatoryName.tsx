import React from 'react';
import { inputClass, labelClass } from './vars';

interface ClientSignatoryNameProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ClientSignatoryName: React.FC<ClientSignatoryNameProps> = ({ value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="client_signatory_name" className={labelClass}>Signatory Name</label>
      <input
        type="text"
        id="client_signatory_name"
        name="client_signatory_name"
        value={value}
        onChange={onChange}
        required
        className={inputClass}
      />
    </div>
  );
};

export default ClientSignatoryName;