import React from 'react';
import { checkboxClass, labelClass } from './vars';

interface TermsAgreeProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TermsAgree: React.FC<TermsAgreeProps> = ({ checked, onChange }) => {
  return (
    <div className="form-group">
      <input
        type="checkbox"
        id="terms_agree"
        name="terms_agree"
        checked={checked}
        onChange={onChange}
        className={checkboxClass}
      />
      <label htmlFor="terms_agree" className={labelClass}>
        I agree to the terms and conditions.
      </label>
    </div>
  );
};

export default TermsAgree;