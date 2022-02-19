import { FC, InputHTMLAttributes, useState } from 'react';
import { useController } from 'react-hook-form';

import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  type: 'text' | 'email' | 'password';
  label?: string;
  helperText?: string;
  name: string;
  control: any;
}

export const InputText: FC<InputTextProps> = ({
  type,
  label,
  helperText,
  name,
  control,
  placeholder,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  const onAlternateVisibilityHandler = () => {
    setIsVisible(prevState => !prevState);
  };

  return (
    <div className="flex flex-col">
      <label htmlFor={`text-input-${name}`} className="mb-2 text-sm">
        {label}
      </label>
      <div className="relative">
        <input
          {...field}
          placeholder={placeholder}
          id={`text-input-${name}`}
          type={type !== 'password' ? type : isVisible ? 'text' : 'password'}
          className={`
          border block w-full py-2 px-4 text-sm rounded focus:ring focus:outline-none focus:ring-slate-300 placeholder:text-gray-300 ${
            !!error ? 'border-red-500' : 'border-gray-200'
          }`}
        />
        {type === 'password' && (
          <span
            className="absolute right-0 top-1/2 -translate-y-1/2 px-4  hover:cursor-pointer"
            onClick={onAlternateVisibilityHandler}
          >
            {isVisible && (
              <EyeIcon
                className={`h-5 w-5 ${
                  !!error ? 'text-red-400' : 'h-5 w-5 text-gray-400'
                }`}
              />
            )}
            {!isVisible && (
              <EyeOffIcon
                className={`h-5 w-5 ${
                  !!error ? 'text-red-400' : 'h-5 w-5 text-gray-400'
                }`}
              />
            )}
          </span>
        )}
      </div>
      <p
        className={`text-[13px] mt-1 pl-1 ${
          !!error ? 'text-red-400' : 'text-gray-400'
        }`}
      >
        {error?.message ?? helperText}
      </p>
    </div>
  );
};
