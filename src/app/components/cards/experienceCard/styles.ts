import { Paper, styled } from '@mui/material';
import { ColorPalette } from '@utils/colorPalette';

export const ExperienceCardPaper = styled(Paper)(
  ({ theme }) => ({
    width: '350px',
    background:
      'linear-gradient(#24394C 0%, #B6BDC3 100%);',
    padding: '15px',
    borderRadius: '10px',
    [theme.breakpoints.down('sm')]: {
      width: '250px',
      padding: '10px',
    },
  }),
);

export const ExperienceCardWrapper = styled('div')({
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
  backgroundColor: ColorPalette.auraWhite,
  border: 'thick double darkblue',
  borderRadius: '10px 10px 0px 0px',
});

export const TitleBox = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  padding: '0px 0.5rem',
  backgroundColor: ColorPalette.auraWhite,
  border: 'thick double darkblue',
});

export const JobTypeBox = styled('div')({
  backgroundColor: ColorPalette.darkMidnight,
  color: ColorPalette.auraWhite,
  borderRadius: '15px',
  padding: '0px 0.5rem',
});

export const JobDescriptionBox = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  padding: '0.5rem',
  backgroundColor: '#fafafa',
  border: 'thick double darkblue',
  borderRadius: '0px 0px 10px 10px',
});

export const YearsTab = styled('div')({
  backgroundColor: ColorPalette.midnight,
  borderRadius: '15px',
  padding: '0px 0.5rem',
  width: 'fit-content',
  alignSelf: 'self-end',
  marginBottom: '0.5rem',
  color: ColorPalette.auraWhite,
});
