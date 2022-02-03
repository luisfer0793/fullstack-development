import { FC } from 'react';

interface ToastErrorProps {
  message: string;
}

export const ToastError: FC<ToastErrorProps> = ({ message }) => (
  <div className="py-2 px-8 rounded border-solid border-2 border-rose-300 bg-red-100">
    <p className="text-red-900 text-center">{message}</p>
  </div>
);
