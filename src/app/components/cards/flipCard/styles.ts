import { styled } from '@mui/material';
import { PalletColor } from '@utils/palletColor';

export const CardContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  // marginTop: '30px',
  // marginBottom: '50px',
  // height: '494px',
  height: '474px',
  // height: '460px',
  perspective: '500px',
  ['&:hover > div:first-of-type']: {
    cursor: 'pointer',
    transform: 'rotateY(180deg)',
  },
  [theme.breakpoints.down('sm')]: {
    height: '514px',
  },
}));

export const Card = styled('div')(({ theme }) => ({
  borderRadius: '10px',
  // height: '415px',
  height: '474px',
  width: '350px',
  // position: 'relative',
  transition: 'transform 1500ms',
  transformStyle: 'preserve-3d',
  [theme.breakpoints.down('sm')]: {
    width: '250px',
    height: '514px',
    // height: '495px',
    // height: '415px',
  },
}));

/* Set the initial rotation to show the front face */
export const FrontCard = styled('div')({
  transform: 'rotateY(0)',
  borderRadius: '10px',
  //   background: 'linear-gradient(#00192F 0%, #6D7B88 100%);',
  //   padding: '15px',

  //   backgroundImage:
  //     'url("https://images.thenile.io/r1000/4012927741450.jpg")',
  //   backgroundSize: 'cover',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundPosition: 'center',
  height: '100%',
  width: '100%',

  // boxShadow: '0 0 5px 2px rgba(50, 50, 50, 0.25)',
  position: 'absolute',
  backfaceVisibility: 'hidden',
});

export const BackCard = styled('div')({
  transform: 'rotateY(180deg)',
  backgroundColor: PalletColor.auraWhite,
  //   backgroundImage:
  //     'url("https://millenniumcomics.com.au/cdn/shop/products/a13fd31b-ab15-55c2-a25f-1ed36dd99ac1.png?v=1636761965")',
  //   backgroundSize: 'cover',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundPosition: 'center',
  height: '100%',
  width: '100%',
  borderRadius: '20px',
  boxShadow: '0 0 5px 2px rgba(50, 50, 50, 0.25)',
  position: 'absolute',
  backfaceVisibility: 'hidden',
});
