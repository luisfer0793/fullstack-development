import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { InferType } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { TourFormSchema } from 'shared/validations/TourFormSchema';

import { Button } from 'components/common/Button/Button.component';
import { InputText } from 'components/inputs/Text/InputText.component';
import { InputSelect } from 'components/inputs/Select/InputSelect.component';
import { InputCheckbox } from 'components/inputs/Checkbox/InputCheckbox.component';

type TourFormData = InferType<typeof TourFormSchema>;

interface Vehicles {
  car: string;
  bike: string;
  boat: string;
  tractor: string;
}

const collection: Vehicles = {
  car: 'Automóvil',
  bike: 'Bicicleta',
  boat: 'Bote',
  tractor: 'Tractor',
};

export const TourForm: FC = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm<TourFormData>({
    resolver: yupResolver(TourFormSchema),
    defaultValues: {
      name: '',
      option: '',
      email: '',
      password: '',
      confirmation: '',
      isMarried: false,
      vehicles: {
        car: false,
        bike: false,
        boat: false,
        tractor: false,
      },
    },
  });

  const onSubmitHandler = (data: TourFormData) => {
    const { vehicles, ...rest } = data;
    const vehiclesAsArray = Object.keys(vehicles).filter(
      vehicle => vehicles[vehicle as keyof Vehicles]
    );
    console.log('Data: ', { ...rest, vehiclesAsArray });
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      console.log('Se envió correctamente la información');
      reset();
    }
  }, [isSubmitSuccessful]);

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} noValidate>
      <InputSelect
        name="option"
        label="Opciones"
        control={control}
        placeholder="Selecciona una opción"
        helperText="Aquí va tu selección mas importante"
      />
      <br />
      <InputText
        name="name"
        type="text"
        label="Nombre"
        control={control}
        placeholder="Escribe tu nombre"
        helperText="Aquí va tu nombre completo"
      />
      <br />
      <InputText
        name="email"
        type="email"
        label="Email"
        control={control}
        placeholder="hello@example.com"
        helperText="Tu correo electrónico"
      />
      <br />
      <InputText
        name="password"
        type="password"
        label="Contraseña"
        control={control}
        placeholder="Contraseña"
        helperText="Mas de 6 caracteres"
      />
      <br />
      <InputText
        name="confirmation"
        type="password"
        label="Confirmar contraseña"
        control={control}
        placeholder="Vuelve a esribir tu contraseña"
        helperText="Mas de 6 caracteres"
      />
      <br />
      <InputCheckbox
        label="Casado"
        name="isMarried"
        control={control}
        helperText="Estado civil"
      />
      <br />
      {Object.keys(collection).map(vehicle => (
        <InputCheckbox
          key={vehicle}
          label={collection[vehicle as keyof Vehicles]}
          name={`vehicles.${vehicle}`}
          control={control}
          helperText="Selecciona uno o más vehículos"
        />
      ))}
      <br />
      <Button type="submit" label="Enviar" />
    </form>
  );
};
