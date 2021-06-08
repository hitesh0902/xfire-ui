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
    <div>
      <label>{label}</label>
      <select onChange={onChange}>
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
