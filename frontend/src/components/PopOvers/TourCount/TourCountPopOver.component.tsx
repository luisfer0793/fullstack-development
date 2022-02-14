import { useTypedSelector } from 'state/store';

import { totalToursSelector } from 'state/slices/tours/tours.selector';

export const TourCountPopOver = () => {
  const count = useTypedSelector(totalToursSelector);

  return (
    <div className="bg-lime-200 text-center py-4">
      <h6>Total de tours</h6>
      <p>{count}</p>
    </div>
  );
};
