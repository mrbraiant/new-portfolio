import { Paper, styled } from '@mui/material';
import { PalletColor } from '@utils/palletColor';

export const ExperienceCardPaper = styled(Paper)(
  ({ theme }) => ({
    width: '350px',
    // height: '434px',
    border: '15px solid #24394C',
    borderRadius: '10px',
    [theme.breakpoints.down('sm')]: {
      width: '300px',
    },
  }),
);

export const ExperienceCardWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
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
  flexDirection: 'column',
  // alignItems: 'center',
  // justifyContent: 'space-between',
  width: '100%',
  padding: '0px 0.5rem',
  backgroundColor: '#fafafa',
  border: 'thick double darkblue',
});

export const YearsTab = styled('div')({
  backgroundColor: 'orange',
  borderRadius: '15px',
  padding: '0px 0.5rem',
  width: 'fit-content',
  alignSelf: 'self-end',
  marginTop: '-20px',
  marginBottom: '0.5rem',
});
