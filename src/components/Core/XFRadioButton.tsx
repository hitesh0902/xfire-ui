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
      className={classNames(
        'flex space-y-1 w-full',
        vertical ? 'flex-col' : 'flex-row gap-3',
      )}
    >
      {values.map((value) => (
        <div className='flex items-center space-x-2' key={value}>
          <input
            type='radio'
            className='rounded-full border-none ring-gray-200 focus:outline-none focus:ring-0 h-4 w-4 text-primary'
            id={`${value}`}
            name={groupName}
            value={value}
            onChange={(e) => onChange(e)}
          />
          <p>{value}</p>
        </div>
      ))}
    </div>
  );
};

export default XFRadioButton;
