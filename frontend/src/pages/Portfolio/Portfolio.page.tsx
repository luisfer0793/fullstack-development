import { SkeletonCard } from 'components/Skeletons/Card/SkeletonCard.component';
import { ToastError } from 'components/Toasts/Error/ToastError.component';

export const PortfolioPage = () => {
  return (
    <main className="container mx-auto mt-8">
      <h1 className="text-center text-3xl uppercase">Portafolio</h1>
      <SkeletonCard />
      <ToastError message="El error va aquí" />
    </main>
  );
};
