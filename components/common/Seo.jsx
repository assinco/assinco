import Head from 'next/head';

const Seo = ({ pageTitle }) => (
  <>
    <Head>
      <title>
        {pageTitle && `${pageTitle} | Más de 30 años brindando confort.}`}
      </title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
    </Head>
  </>
);

export default Seo;
