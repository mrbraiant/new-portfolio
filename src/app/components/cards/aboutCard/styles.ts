import { Paper, styled } from '@mui/material';
import { PalletColor } from '@utils/palletColor';

export const AboutCardPaper = styled(Paper)(
  ({ theme }) => ({
    width: '350px',
    borderRadius: '10px',
    background:
      'linear-gradient(#00192F 0%, #6D7B88 100%);',
    padding: '15px',
    [theme.breakpoints.down('sm')]: {
      width: '300px',
    },
  }),
);

export const AboutCardWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const MainTitleBox = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  padding: '0px 0.5rem',
  backgroundColor: PalletColor.auraWhite,
  border: 'thick double darkblue',
  borderRadius: '10px 10px 0px 0px',
});

export const TitleBox = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  padding: '0px 0.5rem',
  backgroundColor: PalletColor.auraWhite,
  border: 'thick double darkblue',
});

export const JobTypeBox = styled('div')({
  backgroundColor: PalletColor.darkMidnight,
  color: PalletColor.auraWhite,
  borderRadius: '15px',
  padding: '0px 0.5rem',
});

export const JobDescriptionBox = styled('div')({
  display: 'flex',
  width: '100%',
  padding: '0px 0.5rem',
  backgroundColor: '#fafafa',
  border: 'thick double darkblue',
  borderRadius: '0px 0px 10px 10px',
});
