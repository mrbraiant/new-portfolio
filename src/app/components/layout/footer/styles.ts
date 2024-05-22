import { styled } from '@mui/material';
import { PalletColor } from '@utils/palletColor';

export const SocialMediaBox = styled('div')({
  backgroundColor: '#35536f',
  padding: '0.5rem',
  borderRadius: '10px',
  ['a']: {
    color: PalletColor.auraWhite,
  },
});
