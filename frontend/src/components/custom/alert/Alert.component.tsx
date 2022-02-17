import { FC } from 'react';

interface AlertProps {
  variant: 'success' | 'warning' | 'error' | 'info';
}

export const Alert: FC<AlertProps> = ({ variant }) => {
  return (
    <aside className="flex w-max bg-red-50 before:bg-red-600 before:block before:w-1">
      <div className="px-4 py-2">
        <h6 className="text-red-600 text-sm mb-1">Bummer!</h6>
        <p className="text-sm">Algo salió mal.</p>
      </div>
    </aside>
  );
};
