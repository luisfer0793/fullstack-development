import { FC, Fragment, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import dayjs from 'dayjs';

import { Button, Space } from '@mantine/core';
import { useNotifications } from '@mantine/notifications';

import { TextControlledInput } from 'components/inputs/Text/TextControlledInput.component';
import { SelectControlledInput } from 'components/inputs/Select/SelectControlledInput.component';
import { NumberControlledInput } from 'components/inputs/Number/NumberControlledInput.component';
import { CheckboxControlledInput } from 'components/inputs/Checkbox/CheckboxControlledInput.component';
import { CalendarControlledInput } from 'components/inputs/Calendar/CalendarControlledInput.component';

import {
  FingerPrintIcon,
  AtSymbolIcon,
  LockClosedIcon,
  PhoneIcon,
} from '@heroicons/react/outline';

import {
  IVehicles,
  TourFormSchema,
  TourFormDataType,
  vehicles,
  defaultValues,
} from './TourForm.util';

const people = [
  { value: 'Wade Cooper', label: 'Wade Cooper' },
  { value: 'Arlene Mccoy', label: 'Arlene Mccoy' },
  { value: 'Devon Webb', label: 'Devon Webb' },
  { value: 'Tom Cook', label: 'Tom Cook' },
  { value: 'Tanya Fox', label: 'Tanya Fox' },
  { value: 'Hellen Schmidt', label: 'Hellen Schmidt' },
];

export const TourForm: FC = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm<TourFormDataType>({
    defaultValues,
    resolver: yupResolver(TourFormSchema),
  });

  const { showNotification } = useNotifications();

  const onSubmitHandler = (data: TourFormDataType) => {
    const { vehicles: items, ...rest } = data;
    const vehicles = Object.keys(items).filter(
      vehicle => items[vehicle as keyof IVehicles]
    );
    console.log('Data: ', { ...rest, vehicles });
    console.log(
      'Fecha humanizada: ',
      dayjs(rest.date).locale('es').format('LLL')
    );
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      showNotification({
        title: 'Informaci??n enviada',
        message:
          'Tu informaci??n fue enviada con ??xito, pronto recibir??s noticias.',
        color: 'green',
      });
      reset();
    }
  }, [isSubmitSuccessful, reset, showNotification]);

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} noValidate>
      <SelectControlledInput
        disabled
        data={people}
        name="option"
        label="Opciones"
        control={control}
        placeholder="Selecciona una opci??n"
        helperText="Aqu?? va tu selecci??n mas importante"
      />
      <br />
      <TextControlledInput
        disabled
        name="name"
        type="text"
        label="Nombre"
        control={control}
        placeholder="Escribe tu nombre"
        description="Aqu?? va tu nombre completo"
        icon={<FingerPrintIcon />}
      />
      <br />
      <TextControlledInput
        required
        name="email"
        type="email"
        label="Email"
        control={control}
        placeholder="hello@example.com"
        description="Tu correo electr??nico"
        icon={<AtSymbolIcon />}
      />
      <br />
      <TextControlledInput
        required
        name="password"
        type="password"
        label="Contrase??a"
        control={control}
        placeholder="Contrase??a"
        description="Mas de 6 caracteres"
        icon={<LockClosedIcon />}
      />
      <br />
      <TextControlledInput
        required
        name="confirmation"
        type="password"
        label="Confirmar contrase??a"
        control={control}
        placeholder="Vuelve a escribir tu contrase??a"
        description="Mas de 6 caracteres"
        icon={<LockClosedIcon />}
      />
      <br />
      <CheckboxControlledInput
        disabled
        label="Casado"
        name="isMarried"
        control={control}
        helperText="Estado civil"
      />
      <br />
      {Object.keys(vehicles).map(vehicle => (
        <Fragment key={vehicle}>
          <CheckboxControlledInput
            label={vehicles[vehicle as keyof IVehicles]}
            name={`vehicles.${vehicle}`}
            control={control}
            helperText="Selecciona uno o m??s veh??culos"
          />
          <Space h="md" />
        </Fragment>
      ))}
      <br />
      <CalendarControlledInput
        name="date"
        control={control}
        minDate={dayjs(new Date()).toDate()}
        maxDate={dayjs(new Date()).add(5, 'days').toDate()}
      />
      <br />
      <NumberControlledInput
        disabled
        name="phoneNumber"
        label="Tel??fono"
        control={control}
        icon={<PhoneIcon />}
        format="(##) #### ####"
        placeholder="55 5555 5555"
        description="N??mero de tel??fono a 10 d??gitos"
      />
      <br />
      <Button type="submit" uppercase color="slate">
        Enviar
      </Button>
    </form>
  );
};
