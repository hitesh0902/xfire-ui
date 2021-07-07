import React from 'react';
import { IOptions } from '../../types';

interface XFCheckboxProps {
  label?: string;
  options: IOptions[];
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

const XFCheckbox: React.FC<XFCheckboxProps> = ({
  label,
  options,
  onChange,
}) => {
  return (
    <div>
      {label && <label>{label}</label>}
      {options.map((option) => (
        <div
          className='flex items-center justify-start space-x-2'
          key={option.value}
        >
          <input
            type='checkbox'
            className='rounded-full border-none ring-gray-200 focus:outline-none focus:ring-0 h-4 w-4 text-primary'
            value={option.value}
            onChange={(e) => onChange(e)}
            disabled={option.disabled}
          />
          <label>{option.label}</label>
        </div>
      ))}
    </div>
  );
};

export default XFCheckbox;
