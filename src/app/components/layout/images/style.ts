import { Text } from '@components/text';
import { keyframes, styled } from '@mui/material';

export const Wrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage: `url('/images/main-background.webp')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: 'inherit',
});

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AnimatedTitle = styled(Text)(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ theme }) => ({
    textAlign: 'center',
    fontWeight: 800,
    animation: `${fadeInUp} 1s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  }),
);
