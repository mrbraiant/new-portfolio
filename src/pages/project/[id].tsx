import { useRouter } from 'next/router';
import Image from 'next/image';
import { IconButton } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import ReactMarkdown from 'react-markdown';
import { PalletColor } from '@utils/palletColor';
import { Layout } from '@components/layout';
import { Text } from '@components/text';
import { NotFound } from '@components/templates/notFound';
import { Projects } from '@utils/projects';

export default function Project() {
  const router = useRouter();
  const { query, isReady } = router;
  const { id } = query;

  const project = Projects.filter(
    (project) => project.id === Number(id),
  );
  const projectContent = project[0];

  console.log('project', project);
  console.log('projectContent', projectContent);

  return isReady ? (
    <>
      {projectContent !== undefined ? (
        <Layout showMainBackgroundImage={false}>
          {projectContent.projectImage !== undefined ? (
            <div>
              <Image
                alt={`project-image-${projectContent.projectName}`}
                src={projectContent.projectImage}
                width={800}
                height={520}
                style={{
                  width: '100%',
                  objectFit: 'cover',
                  borderRadius: '15px',
                }}
                unoptimized={true}
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
                onClick={() => router.push('/#projects')}
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
            <strong>{projectContent.projectName}</strong>
          </Text>
          <br />

          <Text type="h5" textAlign="center">
            <ReactMarkdown>
              {projectContent.projectDescription}
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
              title="Back to project section"
              sx={{
                backgroundColor: PalletColor.darkMidnight,
                '&:hover': {
                  backgroundColor: PalletColor.midnight,
                },
              }}
              onClick={() => router.push('/#projects')}
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
