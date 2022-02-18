import { FC, InputHTMLAttributes } from 'react';
import { Control, useController, UseControllerProps } from 'react-hook-form';

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  type: 'text' | 'email';
  label?: string;
  helperText?: string;
  name: string;
  control: any;
  rules?: any;
}

export const InputText: FC<InputTextProps> = ({
  type,
  label,
  helperText,
  name,
  rules,
  control,
  placeholder,
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control, rules });
  return (
    <div className="flex flex-col">
      <label htmlFor="text-input" className="mb-2 text-[15px]">
        {label}
      </label>
      <input
        {...field}
        placeholder={placeholder}
        id="text-input"
        type={type}
        className="border py-2 px-4 border-gray-200 text-sm rounded placeholder:text-gray-300"
      />
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
