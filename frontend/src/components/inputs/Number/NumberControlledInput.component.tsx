import { FC } from 'react';
import { useController } from 'react-hook-form';
import NumberFormat from 'react-number-format';

import { TextInput, TextInputProps } from '@mantine/core';

interface NumberControlledProps extends TextInputProps {
  name: string;
  control: any;
  helperText?: string;
  format?: string | ((input: string) => string);
}

export const NumberControlledInput: FC<NumberControlledProps> = ({
  type,
  name,
  control,
  format,
  ...restProps
}) => {
  const {
    field: { value, onChange, ...restField },
    fieldState: { error },
  } = useController({ name, control });

  return (
    <NumberFormat
      {...restField}
      {...restProps}
      format={format}
      value={value}
      defaultValue={value}
      error={error?.message}
      customInput={TextInput}
      onValueChange={({ value }) => onChange(value)}
    />
  );
};
