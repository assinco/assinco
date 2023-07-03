import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta
          name='description'
          content='Assinco Climatizacion - Más de 30 años brindando confort'
        />
        <meta
          name='keywords'
          content='assinco, climatizacion, aire acondicionado, business multipurpose, charity, creative, creative template, crypto, education, hosting, insurance, landing page, portfolio, real estate, responsive, react, nextjs'
        />

        <link rel='icon' href='/assinco_logo.png' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
