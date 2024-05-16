import { Text } from '@components/text';
import { Button, Paper } from '@mui/material';
import Image from 'next/image';

type BlogCardProps = {
  title: string;
  intro: string;
};

export const BlogCard = ({
  title,
  intro,
}: BlogCardProps) => {
  return (
    <Paper
      elevation={3}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '250px',
        height: 'fit-content',
        borderRadius: '5px',
      }}
    >
      <Image
        alt="paper-image"
        src={'/images/background.png'}
        width={250}
        height={250}
        style={{ borderRadius: '5px 5px 0 0' }}
      />
      <div style={{ margin: '1rem' }}>
        <Text textAlign="center">
          <strong>{title}</strong>
        </Text>
        <Text type="body2">
          {String(intro).substring(0, 50) + '...'}
        </Text>
      </div>
      <Button>See More</Button>
    </Paper>
  );
};
