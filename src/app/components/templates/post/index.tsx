import { Layout } from '@components/layout';
import { Text } from '@components/text';
import { ArrowBack } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { ColorPalette } from '@utils/colorPalette';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { NotFound } from '../notFound';
import { Post } from '@types';
import { useRouter } from 'next/router';

type PostTemplateProps = {
  postContent: Post;
};

export const PostTemplate = ({
  postContent,
}: PostTemplateProps) => {
  const router = useRouter();

  return (
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
                placeholder="blur"
                blurDataURL={
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYJxUDwABsAEUeRJLjwAAAABJRU5ErkJggg=='
                }
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
                  backgroundColor:
                    ColorPalette.darkMidnight,
                  '&:hover': {
                    backgroundColor: ColorPalette.midnight,
                  },
                }}
                onClick={() => router.push('/#blog')}
              >
                <ArrowBack
                  sx={{
                    color: ColorPalette.auraWhite,
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

          <Text
            sx={{
              ['pre']: {
                backgroundColor: ColorPalette.silverSpring,
                width: 'fit-content',
                fontSize: '16px',
              },
            }}
          >
            <ReactMarkdown>
              {postContent.content}
            </ReactMarkdown>
          </Text>

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
                backgroundColor: ColorPalette.darkMidnight,
                '&:hover': {
                  backgroundColor: ColorPalette.midnight,
                },
              }}
              onClick={() => router.push('/#blog')}
            >
              <ArrowBack
                sx={{
                  color: ColorPalette.auraWhite,
                }}
              />
            </IconButton>
          </div>
        </Layout>
      ) : (
        <NotFound />
      )}
    </>
  );
};
