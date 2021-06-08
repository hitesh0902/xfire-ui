import React from 'react';

interface XFTextFieldProps {
  label?: string;
  placeHolder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const XFTextField: React.FC<XFTextFieldProps> = ({
  label,
  placeHolder,
  disabled = false,
  onChange,
}) => {
  return (
    <div>
      {label && <label className='mr-2'>{label}</label>}
      <input
        placeholder={placeHolder}
        onChange={(e) => onChange(e)}
        disabled={disabled}
      />
    </div>
  );
};

export default XFTextField;
