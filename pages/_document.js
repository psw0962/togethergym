import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* 홈페이지 */}
          <meta name="author" content="togethergym" />
          <meta
            name="keywords"
            content="투게더짐, togethergym, 남스짐, health, fitness, gym, pt, PT, crossfit,team training, weight training, 헬스장, 헬스클럽"
          />
          <meta name="description" content="같이하는 재밌는 운동 투게더 짐" />

          {/* Jua */}
          <link
            href="https://fonts.googleapis.com/css2?family=Jua&display=swap"
            rel="stylesheet"
          />

          {/* 오픈 그래프 */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="TOGETHER GYM" />
          <meta
            property="og:description"
            content="같이하는 재밌는 운동 투게더 짐"
          />
          <meta property="og:site_name" content="TOGETHER GYM" />
          <meta property="og:image" content="" />
          <meta property="og:locale" content="ko_KR" />
          <meta property="og:url" content="https://www.togethergym.co.kr/" />

          <meta property="og:image:width" content="600" />
          <meta property="og:image:height" content="315" />

          {/* 트위터용 */}
          <meta name="twitter:card" content="website" />
          <meta name="twitter:title" content="TOGETHER GYM" />
          <meta
            name="twitter:description"
            content="같이하는 재밌는 운동 투게더 짐"
          />
          <meta name="twitter:image" content="" />
        </Head>

        <body>
          <Main />
        </body>

        <NextScript />
      </Html>
    );
  }
}

CustomDocument.getInitialProps = async ctx => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
      });

    const initialProps = await Document?.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
    };
  } catch (error) {
    console.log(error);
  } finally {
    sheet.seal();
  }
};
