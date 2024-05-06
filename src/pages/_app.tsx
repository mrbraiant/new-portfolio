import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../app/globals.css';

export default function App({
  Component,
  pageProps,
}: AppProps) {
  return (
    <>
      <Head>
        <title>Braiant Dev</title>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <meta
          name="description"
          content="This is my newest portfolio which shows my main skills"
        />
        <meta
          name="keywords"
          content="Braiant Dev, front-end developer, JavaScript, TypeScript, Next.js, React, Node, HTML, CSS"
        />
        <meta name="author" content="Braiant Malta" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=0, maximum-scale=1, minimum-scale=1"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
