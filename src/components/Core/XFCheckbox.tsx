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
      <label>{label}</label>
      {options.map((option) => (
        <div key={option.value}>
          <input
            type='checkbox'
            value={option.value}
            onChange={(e) => onChange(e)}
            disabled={option.disabled}
          />
          <label className='ml-1'>{option.label}</label>
        </div>
      ))}
    </div>
  );
};

export default XFCheckbox;
