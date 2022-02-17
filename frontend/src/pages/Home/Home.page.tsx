import { Button } from 'components/common/Button/Button.component';

export const HomePage = () => {
  return (
    <main className="container mx-auto mt-8">
      <h1 className="text-4xl uppercase text-center">Mi página web!</h1>
      <section className="mt-4 grid grid-cols-3 gap-x-2">
        <p>
          En todo 2021, Apple se ubicó en el tercer puesto de las firmas
          preferidas de smartphones, con el 16% del mercado. Los puestos de
          honor fueron para Vivo y Oppo, de la privada BBK Electronics.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla atque
          sed amet facilis sit optio, asperiores, libero doloremque inventore
          esse, totam labore aliquid perspiciatis aut fuga saepe voluptatum ab
          cupiditate sunt est ullam suscipit! Minima, itaque. Nam non, omnis
          sequi quo amet odio repellat hic et neque, corporis qui earum?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla atque
          sed amet facilis sit optio, asperiores, libero doloremque inventore
          esse, totam labore aliquid perspiciatis aut fuga saepe voluptatum ab
          cupiditate sunt est ullam suscipit! Minima, itaque. Nam non, omnis
          sequi quo amet odio repellat hic et neque, corporis qui earum?
        </p>
      </section>
      <div className="mt-4 flex items-center justify-center">
        <Button
          label="Set Tours"
          onClick={() => {
            console.log('Hello World');
          }}
        />
      </div>
    </main>
  );
};
