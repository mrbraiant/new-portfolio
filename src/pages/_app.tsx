import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../app/globals.css';
import {
  ThemeProvider,
  createTheme,
  useMediaQuery,
  useTheme,
} from '@mui/material';

export default function App({
  Component,
  pageProps,
}: AppProps) {
  const mobileTheme = useTheme();

  const isMobileVersion = useMediaQuery(
    mobileTheme.breakpoints.down('sm'),
  );

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Annie Use Your Telescope',
        'cursive',
      ].join(','),
      h1: {
        fontSize: isMobileVersion ? 50 : 96,
      },
      h2: {
        fontSize: 60,
      },
      h3: {
        fontSize: 48,
      },
      h4: {
        fontSize: 34,
      },
      h5: {
        fontSize: 26,
      },
      h6: {
        fontSize: 24,
      },
      subtitle1: {
        fontSize: 22,
      },
      subtitle2: {
        fontSize: 20,
      },
      body1: {
        fontSize: 22,
      },
      body2: {
        fontSize: 20,
      },
      caption: {
        fontSize: 18,
      },
    },
  });
  return (
    <>
      <Head>
        <title>Braiant Malta Developer</title>

        <meta
          name="description"
          content="This is my newest portfolio which shows my main skills"
        />
        <meta
          name="keywords"
          content="Braiant Malta Developer, front-end developer, web developer, JavaScript, TypeScript, php, Next.js, React, Node, HTML, CSS"
        />
        <meta name="author" content="Braiant Malta" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=0, maximum-scale=1, minimum-scale=1"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
