// pages/_app.tsx
import { AppProps } from 'next/app';
import { Provider as ReduxProvider } from 'react-redux';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import { api } from '../services/api';
import { store } from '../store/store';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ReduxProvider>
  );
}

export default MyApp;
