import { FC, Fragment, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button, Space } from '@mantine/core';
import { useNotifications } from '@mantine/notifications';

import { TextControlledInput } from 'components/inputs/Text/TextControlledInput.component';
import { SelectControlledInput } from 'components/inputs/Select/SelectControlledInput.component';
import { CheckboxControlledInput } from 'components/inputs/Checkbox/CheckboxControlledInput.component';

import {
  FingerPrintIcon,
  AtSymbolIcon,
  LockClosedIcon,
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
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      showNotification({
        title: 'Información enviada',
        message:
          'Tu información fue enviada con éxito, pronto recibirás noticias.',
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
        placeholder="Selecciona una opción"
        helperText="Aquí va tu selección mas importante"
      />
      <br />
      <TextControlledInput
        disabled
        name="name"
        type="text"
        label="Nombre"
        control={control}
        placeholder="Escribe tu nombre"
        description="Aquí va tu nombre completo"
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
        description="Tu correo electrónico"
        icon={<AtSymbolIcon />}
      />
      <br />
      <TextControlledInput
        required
        name="password"
        type="password"
        label="Contraseña"
        control={control}
        placeholder="Contraseña"
        description="Mas de 6 caracteres"
        icon={<LockClosedIcon />}
      />
      <br />
      <TextControlledInput
        required
        name="confirmation"
        type="password"
        label="Confirmar contraseña"
        control={control}
        placeholder="Vuelve a escribir tu contraseña"
        description="Mas de 6 caracteres"
        icon={<LockClosedIcon />}
      />
      <br />
      <CheckboxControlledInput
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
            helperText="Selecciona uno o más vehículos"
          />
          <Space h="md" />
        </Fragment>
      ))}
      <br />
      <Button type="submit" uppercase color="slate">
        Enviar
      </Button>
    </form>
  );
};
