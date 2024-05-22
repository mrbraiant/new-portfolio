import { styled } from '@mui/material';
import { PalletColor } from '@utils/palletColor';

export const FooterBox = styled('div')(({ theme }) => ({
  backgroundColor: PalletColor.darkMidnight,
  height: 'fit-content',
  padding: '1rem 1.5rem',
  display: 'flex',
  flexDirection: 'column',
  // justifyContent: 'space-between',
  [theme.breakpoints.down('sm')]: {
    //   flexDirection: 'column',
    gap: '1rem',
  },
}));

export const FooterTopContent = styled('div')(
  ({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: '1rem',
    },
  }),
);

export const LogoBox = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
});

export const SocialMediaBox = styled('div')({
  backgroundColor: '#35536f',
  padding: '0.5rem',
  borderRadius: '10px',
  ['a']: {
    color: PalletColor.auraWhite,
  },
});
