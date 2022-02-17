import { useForm } from 'react-hook-form';

import { InputSelect } from 'components/inputs/Select/InputSelect.component';
import { Button } from 'components/common/Button/Button.component';

export const BlogPage = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      option: 'Selecciona una opción',
    },
  });

  const onSubmitHandler = (data: any) => {
    console.log(data);
  };

  return (
    <main className="container mx-auto mt-8">
      <h1 className="text-center text-3xl uppercase">Blog</h1>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <InputSelect control={control} name="option" />
        <Button type="submit" label="Enviar" />
      </form>
    </main>
  );
};
