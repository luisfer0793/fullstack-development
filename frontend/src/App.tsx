import './App.css';

import { Button } from './components/Button/Button.component';

function App() {
  const onClickHandler = () => {
    console.log('Hola');
  };

  return (
    <main className="container mx-auto">
      <h1 className="text-4xl font-bold uppercase text-center">Hello World!</h1>
      <section className="mt-4 grid grid-cols-3 gap-x-2">
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
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla atque
          sed amet facilis sit optio, asperiores, libero doloremque inventore
          esse, totam labore aliquid perspiciatis aut fuga saepe voluptatum ab
          cupiditate sunt est ullam suscipit! Minima, itaque. Nam non, omnis
          sequi quo amet odio repellat hic et neque, corporis qui earum?
        </p>
      </section>
      <div className="mt-4 flex items-center justify-around">
        <Button onClick={onClickHandler}>
          Hola
        </Button>
        <Button onClick={onClickHandler}>
          Como
        </Button>
        <Button onClick={onClickHandler}>
          Estas
        </Button>
      </div>
    </main>
  );
}

export default App;
