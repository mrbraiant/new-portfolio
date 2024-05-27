import { styled } from '@mui/material';

export const ProjectContentBox = styled('div')(
  ({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
      height: '90vh',
      alignContent: 'center',
    },
  }),
);

export const BottomButtonBox = styled('div')(
  ({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '3rem',
    },
  }),
);
