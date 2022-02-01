import { FC } from 'react';

interface ButtonProps {
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ children, onClick }) => (
  <button
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
  >
    <svg
      className="motion-reduce:hidden animate-spin -ml-1 mr-3 h-5 w-5 text-white"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-25"
        fill="currentColor"
        d="M4 12a8 8 0 810-8V0C5.373 0 0 5.373 0 12h5zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
    {children}
  </button>
);
