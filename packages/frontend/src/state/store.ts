import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { AuthenticationReducer } from './slices/authentication.slice';
import { ToursReducer } from './slices/tours/tours.slice';
import { DrawerReducer } from './slices/drawer/drawer.slice';
import { MenusReducer } from './slices/menus/menus.slice';

import { loggerMiddleware } from './middlewares/logger.middleware';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authentication'],
};

const reducer = combineReducers({
  authentication: AuthenticationReducer,
  tours: ToursReducer,
  drawer: DrawerReducer,
  menus: MenusReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).prepend(loggerMiddleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useTypedDispatch = () => useDispatch<AppDispatch>();
