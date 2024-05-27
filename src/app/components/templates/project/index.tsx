import { Layout } from '@components/layout';
import { Text } from '@components/text';
import { ArrowBack } from '@mui/icons-material';
import {
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Project } from '@types';

import { PalletColor } from '@utils/palletColor';
import Image from 'next/image';
import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';
import { NotFound } from '../notFound';
import {
  BottomButtonBox,
  ProjectContentBox,
} from './styles';

type ProjectTemplateProps = {
  projectContent: Project;
};

export const ProjectTemplate = ({
  projectContent,
}: ProjectTemplateProps) => {
  const theme = useTheme();
  const router = useRouter();
  const isMobileVersion = useMediaQuery(
    theme.breakpoints.down('sm'),
  );

  return (
    <>
      {projectContent !== undefined ? (
        <Layout showMainBackgroundImage={false}>
          <ProjectContentBox>
            {projectContent.projectImage !== undefined ? (
              <div>
                <Image
                  alt={`project-image-${projectContent.projectName}`}
                  src={projectContent.projectImage}
                  width={800}
                  height={520}
                  style={{
                    width: '100%',
                    height: isMobileVersion
                      ? 'fit-content'
                      : '520px',
                    objectFit: isMobileVersion
                      ? 'contain'
                      : 'cover',
                    margin: isMobileVersion
                      ? '0px 0px 1.5rem'
                      : undefined,
                    borderRadius: '15px',
                  }}
                  unoptimized={true}
                />
                {isMobileVersion ? null : (
                  <IconButton
                    title="Back to blog section"
                    sx={{
                      position: 'absolute',
                      top: 45,
                      left: 100,
                      backgroundColor:
                        PalletColor.darkMidnight,
                      '&:hover': {
                        backgroundColor:
                          PalletColor.midnight,
                      },
                    }}
                    onClick={() =>
                      router.push('/#projects')
                    }
                  >
                    <ArrowBack
                      sx={{
                        color: PalletColor.auraWhite,
                      }}
                    />
                  </IconButton>
                )}
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

            <BottomButtonBox>
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
            </BottomButtonBox>
          </ProjectContentBox>
        </Layout>
      ) : (
        <NotFound />
      )}
    </>
  );
};
