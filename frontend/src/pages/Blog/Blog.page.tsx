import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';

import { InputSelect } from 'components/inputs/Select/InputSelect.component';
import { Button } from 'components/common/Button/Button.component';
import { InputText } from 'components/inputs/Text/InputText.component';

interface BlogFormTypes {
  option: string;
  name: string;
}

export const BlogPage = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm<BlogFormTypes>({
    defaultValues: {
      option: 'Opciones',
      name: '',
    },
  });

  const onSubmitHandler = (data: any) => {
    console.log(data);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      toast.success('Se envió la información', {
        position: 'top-left',
      });
      reset();
    }
  }, [isSubmitSuccessful]);

  return (
    <main className="container mx-auto mt-8">
      <h1 className="text-center text-3xl uppercase">Blog</h1>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <InputSelect
          label="Selecciona una opción"
          control={control}
          name="option"
          rules={{
            required: 'Este campo es obligatorio',
          }}
          helperText="Aquí va tu selección mas importante"
        />
        <br />
        <InputText
          label="Nombre"
          placeholder="Escribe tu nombre"
          type="text"
          name="name"
          rules={{
            required: 'No digas bromas',
          }}
          control={control}
          helperText="Aquí va tu nombre completo"
        />
        <br />
        <Button type="submit" label="Enviar" />
      </form>
    </main>
  );
};
