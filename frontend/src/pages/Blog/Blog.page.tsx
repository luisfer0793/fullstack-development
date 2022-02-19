import { useState } from 'react';

import { TourForm } from 'components/forms/Tour/TourForm.component';
import { Button } from 'components/common/Button/Button.component';

export const BlogPage = () => {
  const [counter, setCounter] = useState(0);

  const onClickHandler = () => {
    setCounter(prevState => prevState + 1);
  };

  return (
    <main className="container mx-auto mt-8">
      <h1 className="text-center text-3xl uppercase">Formulario</h1>
      <div className="mt-8 bg-amber-100 text-center py-4">
        Contador: {counter}
      </div>
      <div className="mt-8 text-center">
        <Button label="Añadir" onClick={onClickHandler} />
      </div>
      <div className="mt-8">
        <TourForm />
      </div>
    </main>
  );
};
