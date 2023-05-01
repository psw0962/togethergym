import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head />

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
