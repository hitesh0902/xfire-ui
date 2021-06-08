import React from 'react';
import classNames from 'classnames';

interface XFRadioProps {
  groupName: string;
  values: Array<string | number>;
  vertical?: boolean;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

const XFRadioButton: React.FC<XFRadioProps> = ({
  groupName,
  values,
  vertical = false,
  onChange,
}) => {
  return (
    <div
      className={classNames('flex', vertical ? 'flex-col' : 'flex-row gap-3')}
    >
      {values.map((value) => (
        <div className='flex items-center' key={value}>
          <label className='mr-1'>{value}</label>
          <input
            type='radio'
            id={`${value}`}
            name={groupName}
            value={value}
            onChange={(e) => onChange(e)}
          />
        </div>
      ))}
    </div>
  );
};

export default XFRadioButton;
