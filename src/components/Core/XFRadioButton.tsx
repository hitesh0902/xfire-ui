import React from 'react';
import classNames from 'classnames';

interface XFRadioProps {
  groupName: string;
  values: Array<string | number>;
  vertical?: boolean;
}

const XFRadioButton: React.FC<XFRadioProps> = ({
  groupName,
  values,
  vertical = false,
}) => {
  return (
    <div
      className={classNames('flex', vertical ? 'flex-col' : 'flex-row gap-3')}
    >
      {values.map((value) => (
        <div className='flex items-center' key={value}>
          <label className='mr-1'>{value}</label>
          <input type='radio' id={`${value}`} name={groupName} value={value} />
        </div>
      ))}
    </div>
  );
};

export default XFRadioButton;
