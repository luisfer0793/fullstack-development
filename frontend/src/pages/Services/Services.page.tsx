import { useGetTours } from 'network/services/tours/tours.hook';

import { SkeletonCard } from 'components/skeleton/Card/SkeletonCard.component';
import { ToastError } from 'components/Toasts/Error/ToastError.component';

export const ServicesPage = () => {
  const { data, isLoading, isError } = useGetTours();

  if (isLoading) {
    return (
      <main className="container mx-auto mt-8">
        <h1 className="text-center text-3xl uppercase pb-4">Servicios</h1>
        <div className="grid grid-cols-3">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="container mx-auto mt-8">
        <h1 className="text-center text-3xl uppercase pb-4">Servicios</h1>
        <ToastError message="Error al cargar la información, intente de nuevo más tarde" />
      </main>
    );
  }

  return (
    <main className="container mx-auto mt-8">
      <h1 className="text-center text-3xl uppercase">Servicios</h1>
    </main>
  );
};
