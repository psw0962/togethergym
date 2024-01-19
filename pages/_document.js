import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* 홈페이지 */}
          <meta name="author" content="투게더짐" />
          <meta
            name="keywords"
            content="투게더짐, 안산그룹pt, 안산크로스핏, 안산pt, 안산헬스장, 그룹pt"
          />
          <meta
            name="description"
            content="안산최초 안산그룹pt 1:1 전문PT 코치들이 진행하는 그룹피티"
          />

          {/* Jua */}
          <link
            href="https://fonts.googleapis.com/css2?family=Jua&display=swap"
            rel="stylesheet"
          />

          {/* 오픈 그래프 */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="투게더짐" />
          <meta
            property="og:description"
            content="안산최초 안산그룹pt 1:1 전문PT 코치들이 진행하는 그룹피티"
          />
          <meta property="og:site_name" content="투게더짐" />
          <meta property="og:image" content="" />
          <meta property="og:locale" content="ko_KR" />
          <meta property="og:url" content="https://www.togethergym.co.kr" />

          <meta property="og:image:width" content="600" />
          <meta property="og:image:height" content="315" />

          {/* 트위터용 */}
          <meta name="twitter:card" content="website" />
          <meta name="twitter:title" content="투게더짐" />
          <meta
            name="twitter:description"
            content="같이하는 재밌는 운동 투게더 짐"
          />
          <meta name="twitter:image" content="" />

          {/* 네이버 검색엔진 */}
          <meta
            name="naver-site-verification"
            content="1eeea84df0d3764c6719412f49f36b534cb31480"
          />

          {/* 구글 애드센스 */}
          <meta
            name="google-adsense-account"
            content="ca-pub-2830847395912425"
          ></meta>
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
