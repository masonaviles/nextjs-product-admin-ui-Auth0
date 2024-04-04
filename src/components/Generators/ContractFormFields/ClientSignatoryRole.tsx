import React from 'react';
import { inputClass, labelClass } from './vars';

interface ClientSignatoryRoleProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ClientSignatoryRole: React.FC<ClientSignatoryRoleProps> = ({ value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="client_signatory_role" className={labelClass}>Signatory Role</label>
      <input
        type="text"
        id="client_signatory_role"
        name="client_signatory_role"
        value={value}
        onChange={onChange}
        required
        className={inputClass}
      />
    </div>
  );
};

export default ClientSignatoryRole;