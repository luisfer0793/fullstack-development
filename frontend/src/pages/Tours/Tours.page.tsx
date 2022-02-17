import { useGetTours } from 'network/services/tours/tours.hook';

import { Alert } from 'components/custom/alert/Alert.component';
import { SkeletonCard } from 'components/custom/skeletons/Card/SkeletonCard.component';
import { TourCollection } from 'components/custom/collections/Tour/TourCollection.component';

export const ToursPage = () => {
  const { data = [], isLoading, isError } = useGetTours();

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
        <Alert variant="error" />
      </main>
    );
  }

  return (
    <main className="container mx-auto mt-8">
      <h1 className="text-center text-3xl uppercase">Servicios</h1>
      <section className="mt-4">
        <TourCollection tours={data} />
      </section>
    </main>
  );
};
