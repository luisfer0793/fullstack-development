import { TextInputProps, TextInput } from '@mantine/core';

import { FC } from 'react';
import { useController } from 'react-hook-form';

interface InputTextProps extends TextInputProps {
  type: 'text' | 'email' | 'password';
  label?: string;
  helperText?: string;
  name: string;
  control: any;
}

export const TextControlledInput: FC<InputTextProps> = ({
  type,
  label,
  helperText,
  name,
  control,
  placeholder,
  ...restProps
}) => {
  const {
    field,
    fieldState: { error: fieldError },
  } = useController({ name, control });

  return (
    <TextInput
      {...field}
      {...restProps}
      type={type}
      label={label}
      error={fieldError?.message}
      placeholder={placeholder}
    />
  );
};
