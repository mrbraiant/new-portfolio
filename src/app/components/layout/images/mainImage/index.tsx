import { useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';

export const MainImage = () => {
  const theme = useTheme();

  const isMobileVersion = useMediaQuery(
    theme.breakpoints.down('sm'),
  );

  return (
    <>
      <Image
        alt="main-image"
        id="home"
        src={
          isMobileVersion
            ? '/images/background-mobile-nf.gif'
            : '/images/background.gif'
        }
        priority
        unoptimized
        width={1100}
        height={600}
        style={{
          width: '100%',
          height: '95vh',
          objectFit: 'cover',
        }}
      />
    </>
  );
};
