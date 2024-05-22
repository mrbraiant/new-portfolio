import { Paper, styled } from '@mui/material';

export const ContactContent = styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0.5rem',
  borderRadius: '15px',
  marginBottom: '0.5rem',
  width: 'fit-content',
});

export const ContactBox = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  width: '180px',
  // ['a']: {
  //   '&:hover': {
  //     textDecoration: 'underline',
  //   },
  // },
});
