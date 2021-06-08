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
            onChange={onChange}
            disabled={option.disabled}
          />
          <label>{option.label}</label>
        </div>
      ))}
    </div>
  );
};

export default XFCheckbox;
