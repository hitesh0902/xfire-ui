import React from 'react';
import { Controller, ControllerProps, FieldErrors } from 'react-hook-form';
import { get } from 'lodash';
import classNames from 'classnames';
import { FieldError } from 'react-hook-form/dist/types/errors';

type ControlledTextInputType =
  | 'text'
  | 'email'
  | 'number'
  | 'hidden'
  | 'date'
  | 'datetime-local'
  | 'image'
  | 'month'
  | 'password'
  | 'search'
  | 'tel'
  | 'time'
  | 'url'
  | 'week';

interface XFControlledTextFieldProps extends Omit<ControllerProps, 'render'> {
  type?: ControlledTextInputType;
  errors: FieldErrors<any>;
  label?: string;
  readOnly?: boolean;
  noBorder?: boolean;
  placeholder?: string;
}

const XFControlledTextField: React.FC<XFControlledTextFieldProps> = ({
  errors,
  control,
  name,
  label,
  defaultValue,
  rules,
  type = 'text',
  readOnly,
  noBorder,
  placeholder,
}) => {
  const error: FieldError = get(errors, name);

  return (
    <div className='space-y-1 w-full'>
      {label && (
        <label className='inline-block' htmlFor={name}>
          {label}
        </label>
      )}
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue || ''}
        rules={rules}
        render={({ field }) => (
          <input
            {...field}
            id={name}
            type={type}
            readOnly={readOnly}
            placeholder={placeholder}
            className={classNames(
              'appearance-none p-1.5 border border-gray-200 rounded bg-white focus:outline-none focus:ring-1 w-full',
              {
                'bg-gray-50': readOnly,
              },
              {
                'border-none': noBorder,
              },
            )}
          />
        )}
      />
      {error && <p className='text-red-800 text-sm'>{error.message}</p>}
    </div>
  );
};

export default XFControlledTextField;
