import { Paper } from '@mui/material';
import { styled } from '@mui/system';

export const TitleWrapper = styled(Paper)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '10vh',
  backgroundColor: '#00192F',
  borderRadius: 10,
  margin: '2rem 0rem',
});

// bar with image
// export const TitleWrapper = styled('div')({
//   display: 'flex',
//   flexDirection: 'row',
//   alignItems: 'center',
//   justifyContent: 'space-between',
//   width: '100%',
//   height: '80px',
//   maxHeight: '80px',
//   backgroundColor: '#00192F',
//   borderRadius: 10,
//   margin: '2rem 0rem',
// });
