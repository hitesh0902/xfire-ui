import React from 'react';
import classNames from 'classnames';
import { ButtonVariants } from '../../types';

interface XFButtonProps {
  children: string;
  variant?: ButtonVariants;
  onClick?: () => void;
  disabled?: boolean;
}

const XFButton: React.FC<XFButtonProps> = ({
  children = '',
  variant = 'primary',
  onClick,
}) => {
  const variantClassMap: { [key in ButtonVariants]: string } = {
    primary: 'bg-blue-400 hover:bg-blue-500',
    secondary: 'bg-gray-400 hover:bg-gray-500',
  };

  return (
    <button
      className={classNames(
        'border border-gray-500 p-2',
        variantClassMap[variant],
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default XFButton;
