import { useRouter } from 'next/router';
import { Posts } from '../../app/utils/posts';
import Image from 'next/image';
import { IconButton } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { PalletColor } from '@utils/palletColor';
import { Layout } from '@components/layout';
import { Text } from '@components/text';
import ReactMarkdown from 'react-markdown';
import { NotFound } from '@components/templates/notFound';

export default function Post() {
  const router = useRouter();
  const { query, isReady } = router;
  const { id } = query;

  const post = Posts.filter(
    (post) => post.id === Number(id),
  );
  const postContent = post[0];

  return isReady ? (
    <>
      {postContent !== undefined ? (
        <Layout showMainBackgroundImage={false}>
          {postContent.image !== undefined ? (
            <div>
              <Image
                alt={`post-image-${postContent.title}`}
                src={postContent.image}
                width={800}
                height={400}
                style={{
                  width: '100%',
                  objectFit: 'cover',
                  borderRadius: '15px',
                }}
                priority
              />
              <IconButton
                title="Back to blog section"
                sx={{
                  position: 'absolute',
                  top: 45,
                  left: 100,
                  backgroundColor: PalletColor.darkMidnight,
                  '&:hover': {
                    backgroundColor: PalletColor.midnight,
                  },
                }}
                onClick={() => router.push('/#blog')}
              >
                <ArrowBack
                  sx={{
                    color: PalletColor.auraWhite,
                  }}
                />
              </IconButton>
            </div>
          ) : null}

          <Text type="h3" textAlign="center">
            <strong>{postContent.title}</strong>
          </Text>
          <br />
          <Text type="h5">{postContent.intro}</Text>
          <br />

          <ReactMarkdown>
            {postContent.content}
          </ReactMarkdown>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '1rem',
            }}
          >
            <IconButton
              title="Back to blog section"
              sx={{
                backgroundColor: PalletColor.darkMidnight,
                '&:hover': {
                  backgroundColor: PalletColor.midnight,
                },
              }}
              onClick={() => router.push('/#blog')}
            >
              <ArrowBack
                sx={{
                  color: PalletColor.auraWhite,
                }}
              />
            </IconButton>
          </div>
        </Layout>
      ) : (
        <NotFound />
      )}
    </>
  ) : null;
}
