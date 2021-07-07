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
    <div className='space-y-1 w-full'>
      {label && <label className='inline-block'>{label}</label>}
      <div className='p-1'>
        <input
          placeholder={placeHolder}
          onChange={onChange && ((e) => onChange(e))}
          disabled={disabled}
          type={type}
          className='appearance-none p-1.5 border border-gray-200 rounded bg-white focus:outline-none focus:ring-2 focus:ring-primary w-full'
        />
      </div>
    </div>
  );
};

export default XFTextField;
