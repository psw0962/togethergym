import GlobalStyle from 'styles/global-style';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot } from 'recoil';
import Head from 'next/head';
import React, { useState } from 'react';
import usePageLoading from '@/hooks/usePageLoading';
import { Analytics } from '@vercel/analytics/react';
import Navigation from '@/component/common/navigation';
import { useRouter } from 'node_modules/next/router';
import styled from 'styled-components';
import DotSpinner from '@/component/common/dot-spinner';
import Toast from '@/component/common/toast';

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const loading = usePageLoading();
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, user-scalable=no, maximum-scale=1, width=device-width"
        />
        <meta content="yes" name="apple-mobile-web-app-capable" />

        <title>투게더짐</title>
      </Head>

      <GlobalStyle />

      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <RecoilRoot>
            {router?.pathname?.includes('/exercise') === false &&
            router?.pathname?.includes('/control') === false ? (
              <>
                {loading ? (
                  <DotSpinner />
                ) : (
                  <Frame>
                    <Navigation />
                    <Component {...pageProps} />
                    <Toast />
                    <Analytics />
                  </Frame>
                )}
              </>
            ) : (
              <>
                {loading ? (
                  <DotSpinner />
                ) : (
                  <>
                    <Component {...pageProps} />
                    <Toast />
                    <Analytics />
                  </>
                )}
              </>
            )}
          </RecoilRoot>
        </Hydrate>

        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </>
  );
};

export default App;

const Frame = styled.div`
  width: 100vw;
  max-width: 1000px;
  height: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 3rem 10rem 3rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;
