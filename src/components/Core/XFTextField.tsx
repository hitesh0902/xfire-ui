import React from 'react';

interface XFTextFieldProps {
  label?: string;
  placeHolder?: string;
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
  disabled?: boolean;
  type?: string;
}

const XFTextField: React.FC<XFTextFieldProps> = ({
  label,
  placeHolder,
  disabled = false,
  onChange,
  type = 'text',
}) => {
  return (
    <div>
      {label && <label className='mr-2'>{label}</label>}
      <input
        placeholder={placeHolder}
        onChange={onChange && ((e) => onChange(e))}
        disabled={disabled}
        type={type}
      />
    </div>
  );
};

export default XFTextField;
