// import Image from "next/image";
// import styles from "./page.module.css";

import { MiniDrawer } from '@components/drawer';
import { ThemeProvider, createTheme } from '@mui/material';

export default function Home() {
  const theme = createTheme({
    typography: {
      fontFamily: [
        'Annie Use Your Telescope',
        'cursive',
      ].join(','),
      h1: {
        fontSize: 96,
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
        fontSize: 24,
      },
      h6: {
        fontSize: 20,
      },
      subtitle1: {
        fontSize: 18,
      },
      subtitle2: {
        fontSize: 16,
      },
      body1: {
        fontSize: 20,
      },
      body2: {
        fontSize: 16,
      },
    },
  });

  return (
    <main>
      <ThemeProvider theme={theme}>
        <MiniDrawer />
      </ThemeProvider>
    </main>
  );
}
