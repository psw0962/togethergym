import GlobalStyle from 'styles/global-style';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot } from 'recoil';
import Head from 'next/head';
import React, { useState } from 'react';
import usePageLoading from '@/hooks/usePageLoading';
import { Analytics } from '@vercel/analytics/react';
import Navigation from '@/component/common/navigation';

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

        <title>투게더짐</title>
      </Head>

      <GlobalStyle />

      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <RecoilRoot>
            <React.Fragment>
              <Navigation />

              {loading ? (
                <div></div>
              ) : (
                <>
                  <Component {...pageProps} />
                  <Analytics />
                </>
              )}
            </React.Fragment>
          </RecoilRoot>
        </Hydrate>

        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </>
  );
};

export default App;
