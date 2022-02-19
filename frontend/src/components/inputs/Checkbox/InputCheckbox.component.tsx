import { FC, InputHTMLAttributes } from 'react';
import { useController } from 'react-hook-form';

interface InputCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  name: string;
  control: any;
}

export const InputCheckbox: FC<InputCheckboxProps> = ({
  label,
  helperText,
  name,
  control,
}) => {
  const {
    field: { value, ...restField },
    fieldState: { error },
  } = useController({ name, control });

  return (
    <div className="flex items-start">
      <input
        {...restField}
        checked={value}
        type="checkbox"
        className="mt-2 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-200 rounded"
      />
      <div className="ml-2">
        <label htmlFor="text-checkbox" className="text-sm">
          {label}
        </label>
        <p
          className={`text-[13px] pl-1 ${
            !!error ? 'text-red-400' : 'text-gray-400'
          }`}
        >
          {error?.message ?? helperText}
        </p>
      </div>
    </div>
  );
};
