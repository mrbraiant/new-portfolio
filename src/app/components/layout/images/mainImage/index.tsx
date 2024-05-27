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
        priority
        src={
          isMobileVersion
            ? '/images/background-mobile-nf.gif'
            : '/images/background.gif'
        }
        // unoptimized={true}
        placeholder="blur"
        blurDataURL={
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYJxUDwABsAEUeRJLjwAAAABJRU5ErkJggg=='
        }
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
