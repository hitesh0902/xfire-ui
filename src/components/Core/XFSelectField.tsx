import React from 'react';
import { IOptions } from '../../types';

interface XFSelectFieldProps {
  label?: string;
  options: IOptions[];
  onChange(e: React.ChangeEvent<HTMLSelectElement>): void;
}

const XFSelectField: React.FC<XFSelectFieldProps> = ({
  label,
  options,
  onChange,
}) => {
  return (
    <div className='space-y-1 w-full'>
      <label>{label}</label>
      <select
        className='appearance-none p-1.5 border border-gray-200 rounded bg-white focus:outline-none focus:ring-0 w-full'
        onChange={onChange}
      >
        {options.map((option) => (
          <option
            key={option.value}
            disabled={option.disabled}
            value={option.value}
          >
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default XFSelectField;
