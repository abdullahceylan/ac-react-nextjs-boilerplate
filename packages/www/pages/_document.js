import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { miniGlobalCSS } from '@utils/helpers';
import { globalStyles, GlobalNormalize } from '../src/components/styles';

const cdnHost = process.env.CDN_HOST || '.';

export default class CustomDocuments extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          {this.props.styles}
          <GlobalNormalize />
          <style dangerouslySetInnerHTML={{ __html: miniGlobalCSS(globalStyles) }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
