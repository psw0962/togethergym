import GlobalStyle from 'styles/global-style';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot } from 'recoil';
import Head from 'next/head';
import React, { useState } from 'react';
import usePageLoading from '@/hooks/usePageLoading';

const App = ({ Component, pageProps }) => {
  const [queryClient] = useState(() => new QueryClient());
  const loading = usePageLoading();

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, user-scalable=no, maximum-scale=1, width=device-width"
        />

        <title>TOGETHER GYM</title>
      </Head>

      <GlobalStyle />

      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <RecoilRoot>
            {loading ? <div></div> : <Component {...pageProps} />}
          </RecoilRoot>
        </Hydrate>

        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </>
  );
};

export default App;
