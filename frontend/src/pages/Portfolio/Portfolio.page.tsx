import { SkeletonCard } from 'components/custom/skeletons/Card/SkeletonCard.component';

export const PortfolioPage = () => {
  return (
    <main className="container mx-auto mt-8">
      <h1 className="text-center text-3xl uppercase">Portafolio</h1>
      <SkeletonCard />
      <br />
    </main>
  );
};
