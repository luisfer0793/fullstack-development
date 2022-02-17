import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { ReactQueryDevtools } from 'react-query/devtools';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query';

import { Alert } from 'components/custom/alert/Alert.component';

import { store, persistor } from './state/store';

import App from './app/App';

import './index.css';

const client = new QueryClient({
  queryCache: new QueryCache({
    onError: error => {
      toast.custom(<Alert variant="error" />, {
        position: 'bottom-right',
      });
    },
  }),
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.render(
  <QueryClientProvider client={client}>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Toaster />
          <App />
          <ReactQueryDevtools initialIsOpen={true} />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </QueryClientProvider>,
  document.getElementById('root')
);
