import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query';

import { MantineProvider, Global } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';

import { store, persistor } from './state/store';

import AppComponent from './app/App.component';

import { globalStyles } from './styles/global.style';
import { overrides } from './styles/overrides.style';
import { theme } from './styles/theme.style';

import './index.css';

const client = new QueryClient({
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
          <MantineProvider
            withNormalizeCSS
            withGlobalStyles
            theme={theme}
            styles={overrides}
          >
            <NotificationsProvider autoClose={6000}>
              <Global styles={globalStyles} />
              <AppComponent />
            </NotificationsProvider>
          </MantineProvider>
          <ReactQueryDevtools initialIsOpen={true} />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </QueryClientProvider>,
  document.getElementById('root')
);
