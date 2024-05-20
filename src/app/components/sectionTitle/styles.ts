import { Paper } from '@mui/material';
import { styled } from '@mui/system';
import { PalletColor } from '@utils/palletColor';

export const TitleWrapper = styled(Paper)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  width: '100%',
  height: '10vh',
  borderRadius: 10,
  margin: '2rem 0rem',
  ['svg']: {
    color: PalletColor.auraWhite,
  },
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
