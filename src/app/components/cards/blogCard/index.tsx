import { Text } from '@components/text';
import { Paper } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { CardButton } from '@components/button/cardButton';

type BlogCardProps = {
  title: string;
  intro: string;
  id: number;
  image: string;
};

export const BlogCard = ({
  title,
  intro,
  id,
  image,
}: BlogCardProps) => {
  const router = useRouter();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 10,
      }}
    >
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
          src={image}
          width={250}
          height={250}
          style={{ borderRadius: '5px 5px 0 0' }}
        />

        <div style={{ margin: '1rem' }}>
          <Text textAlign="center">
            <strong>{title}</strong>
          </Text>
          <Text type="caption">
            {String(intro).substring(0, 55) + '...'}
          </Text>
        </div>
        <CardButton
          onClick={() => router.push(`/post/${id}`)}
        >
          See More
        </CardButton>
      </Paper>
    </motion.div>
  );
};
