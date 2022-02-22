import { useGetTours } from 'network/services/tours/tours.hook';

import { SkeletonCard } from 'components/custom/skeletons/Card/SkeletonCard.component';
import { TourCollection } from 'components/custom/collections/Tour/TourCollection.component';
import { Container, Title } from '@mantine/core';

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
      </main>
    );
  }

  return (
    <main>
      <Container>
        <Title order={1}>Servicios</Title>
        <section className="mt-4">
          <TourCollection tours={data} />
        </section>
      </Container>
    </main>
  );
};
