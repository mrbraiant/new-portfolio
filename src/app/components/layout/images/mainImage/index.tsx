import { Text } from '@components/text';
// import { useMediaQuery, useTheme } from '@mui/material';
// import Image from 'next/image';
import { Wrapper } from '../style';

export const MainImage = () => {
  // const theme = useTheme();

  // const isMobileVersion = useMediaQuery(
  //   theme.breakpoints.down('sm'),
  // );

  return (
    <>
      {/* <Image
        alt="main-image"
        id="home"
        priority
        // src={
        //   isMobileVersion
        //     ? '/images/background-mobile-nf.gif'
        //     : '/images/background.gif'
        // }
        src={'/images/main-background.webp'}
        // unoptimized={true}
        width={1100}
        height={600}
        style={{
          width: '100%',
          height: 'inherit',
          objectFit: 'cover',
        }}
      /> */}
      <Wrapper>
        <Text
          type="h1"
          style={{
            textAlign: 'center',
            fontWeight: '800',
          }}
          color="white"
        >
          I`&apos;`m Braiant Malta <br /> Developer
        </Text>
      </Wrapper>
    </>
  );
};
