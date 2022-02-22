import { FC } from 'react';
import { useController } from 'react-hook-form';

import { Select, SelectProps } from '@mantine/core';

interface InputSelectProps extends SelectProps {
  name: string;
  control: any;
  label?: string;
  helperText?: string;
  placeholder?: string;
}

export const SelectControlledInput: FC<InputSelectProps> = ({
  name,
  control,
  label,
  helperText,
  placeholder,
  ...restProps
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  return (
    <Select
      {...field}
      {...restProps}
      label={label}
      error={error?.message}
      description={helperText}
      placeholder={placeholder}
    />
  );
};
