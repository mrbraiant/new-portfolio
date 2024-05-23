import { useRouter } from 'next/router';
import { Posts } from '../../app/utils/posts';
import Image from 'next/image';
import { Button, IconButton } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { PalletColor } from '@utils/palletColor';
import { Layout } from '@components/layout';
import { Text } from '@components/text';
import ReactMarkdown from 'react-markdown';

export default function Post() {
  const router = useRouter();
  const { query, isReady } = router;
  const { id } = query;

  const post = Posts.filter(
    (post) => post.id === Number(id),
  );
  const postContent = post[0];

  console.log('post', post);
  console.log('postContent', postContent);

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
        </Layout>
      ) : (
        <Layout showMainBackgroundImage={false}>
          <div
            style={{
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              alt="not-found"
              src={'/images/blog/not-found.gif'}
              width={250}
              height={250}
              quality={100}
            />
            <h2>Sorry</h2>
            {/* <br /> */}
            <h4>No posts found</h4>
            <div style={{ marginTop: '1rem' }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: PalletColor.midnight,
                  borderRadius: '20px',
                  '&:hover': {
                    backgroundColor:
                      PalletColor.darkMidnight,
                  },
                }}
                onClick={() => router.push('/')}
              >
                <strong>Back to Home</strong>
              </Button>
            </div>
          </div>
        </Layout>
      )}
    </>
  ) : null;
}
