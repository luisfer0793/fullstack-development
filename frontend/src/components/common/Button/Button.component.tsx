import { FC, MouseEvent } from 'react';

interface ButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  label: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  label,
  type,
  ...restProps
}) => (
  <button
    type={type}
    onClick={onClick}
    className={`
    bg-slate-600 
    hover:bg-slate-700
    active:bg-slate-900
    text-white
      uppercase
      text-sm
      py-2 
      px-6 
      rounded 
      ease-linear 
      transition 
      duration-100 
      focus:ring
      focus:outline-none
      focus:ring-slate-300
    `}
    {...restProps}
  >
    {label}
  </button>
);
