import React from 'react';

interface ClientAddressProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ClientAddress: React.FC<ClientAddressProps> = ({ value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="client_address">Client Address</label>
      <input
        type="text"
        id="client_address"
        name="client_address"
        value={value}
        onChange={onChange}
        required
        className="form-control"
      />
    </div>
  );
};

export default ClientAddress;