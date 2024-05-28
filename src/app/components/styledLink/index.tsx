import { styled } from '@mui/material';
import Link from 'next/link';

export const StyledLink = styled(Link)({
  color: 'darkblue',
  ['&:hover']: {
    textDecoration: 'underline',
  },
});
