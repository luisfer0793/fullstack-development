import { Middleware, PayloadAction } from '@reduxjs/toolkit';

export const loggerMiddleware: Middleware =
  _ => next => (action: PayloadAction) => {
    console.log('La acción es: ', action.type);
    next(action);
  };
