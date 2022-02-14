import { FC } from 'react';

interface ITourCardProps {
  tour: string;
}

export const TourCard: FC<ITourCardProps> = ({ tour }) => {
  return (
    <article className="border rounded py-2 px-3 border-slate-200 text-center">
      <header>
        <h6 className="uppercase">{tour}</h6>
      </header>
      <footer>
        <p>Aquí va el footer</p>
      </footer>
    </article>
  );
};
