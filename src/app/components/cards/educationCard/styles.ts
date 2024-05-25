import { Paper, styled } from '@mui/material';

export const EducationCardPaper = styled(Paper)({
  width: 'fit-content',
  padding: '1rem',
  border: 'thick double darkblue',
  borderRadius: '10px',
});

export const EducationLineBox = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '1rem',
});
