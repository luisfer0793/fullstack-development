import { object, string, ref, boolean } from 'yup';

export const TourFormSchema = object({
  option: string().required('Este campo es requerido [yup]'),
  name: string().required('El nombre es un campo obligatorio [yup]'),
  password: string()
    .min(6, 'La contraseña debe de tener 6 o más caracteres')
    .required('Este campo es requerido [yup]'),
  confirmation: string()
    .min(6, 'La contraseña debe de tener 6 o más caracteres')
    .oneOf([ref('password')], 'Las contraseñas deben coincidir')
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
