import { FC } from 'react';
import { useController } from 'react-hook-form';

import { Calendar, CalendarProps } from '@mantine/dates';

interface CalendarControlledProps extends CalendarProps {
  name: string;
  control: any;
}

export const CalendarControlledInput: FC<CalendarControlledProps> = ({
  name,
  control,
  ...restProps
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  return <Calendar {...field} {...restProps} />;
};
