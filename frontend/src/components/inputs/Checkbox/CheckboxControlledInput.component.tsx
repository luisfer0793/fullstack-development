import { FC } from 'react';
import { useController } from 'react-hook-form';

import { Checkbox, CheckboxProps } from '@mantine/core';

import { useStyles } from './CheckboxControlledInput.style';

interface InputCheckboxProps extends CheckboxProps {
  label?: string;
  helperText?: string;
  name: string;
  control: any;
}

export const CheckboxControlledInput: FC<InputCheckboxProps> = ({
  label,
  helperText,
  name,
  control,
  ...restProps
}) => {
  const {
    field: { value, ...restField },
    fieldState: { error },
  } = useController({ name, control });

  const {
    classes: { helper, withError },
    cx,
  } = useStyles();

  return (
    <div>
      <Checkbox {...restField} {...restProps} label={label} checked={value} />
      <p className={cx(helper, !!error && withError)}>
        {error?.message ?? helperText}
      </p>
    </div>
  );
};
