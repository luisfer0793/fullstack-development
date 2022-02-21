import { object, string, ref, boolean, InferType } from 'yup';

export interface IVehicles {
  car: string;
  bike: string;
  boat: string;
  tractor: string;
}

export const vehicles: IVehicles = {
  car: 'Automóvil',
  bike: 'Bicicleta',
  boat: 'Bote',
  tractor: 'Tractor',
};

export type TourFormDataType = InferType<typeof TourFormSchema>;

export const defaultValues: TourFormDataType = {
  name: 'Luis Fernando',
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
};

export const TourFormSchema = object({
  option: string(),
  name: string(),
  password: string()
    .min(6, 'La contraseña debe de tener 6 o más caracteres [yup]')
    .required('Este campo es requerido [yup]'),
  confirmation: string()
    .min(6, 'La contraseña debe de tener 6 o más caracteres [yup]')
    .oneOf([ref('password')], 'Las contraseñas deben coincidir [yup]')
    .required('Este campo es requerido [yup]'),
  email: string()
    .email('Ingresa un correo válido [yup]')
    .required('Este campo se requiere [yup]'),
  isMarried: boolean().oneOf([true, false], 'Este campo se requiere [yup]'),
  vehicles: object({
    car: boolean().oneOf(
      [true],
      'La opción de automóvil debe estar seleccionada [yup]'
    ),
    bike: boolean(),
    boat: boolean(),
    tractor: boolean(),
  }),
});
