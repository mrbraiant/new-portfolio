import { Layout } from '@components/layout';
import { Button } from '@mui/material';
import { ColorPalette } from '@utils/colorPalette';
import Image from 'next/image';
import { ButtonBox, LayoutBox } from './styles';
import { useRouter } from 'next/router';
import { Text } from '@components/text';

export const NotFound = () => {
  const router = useRouter();

  return (
    <Layout showMainBackgroundImage={false}>
      <LayoutBox>
        <Image
          alt="not-found"
          src={'/images/blog/not-found.gif'}
          width={250}
          height={250}
          quality={100}
        />
        <Text type="h2">Sorry</Text>
        <Text type="h4">No posts found</Text>

        <ButtonBox>
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: ColorPalette.midnight,
              borderRadius: '20px',
              '&:hover': {
                backgroundColor: '#003D73',
              },
            }}
            onClick={() => router.push('/')}
          >
            <strong>Back to Home</strong>
          </Button>
        </ButtonBox>
      </LayoutBox>
    </Layout>
  );
};
