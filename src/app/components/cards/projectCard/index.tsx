import Image from 'next/image';
import {
  ExperienceCardWrapper,
  JobDescriptionBox,
  TitleBox,
} from '../experienceCard/styles';
import { Text } from '@components/text';
import {
  Button,
  Paper,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { PalletColor } from '@utils/palletColor';
import { StyledLink } from '@components/styledLink';
import { ProjectCardPaper } from './styles';
import { useRouter } from 'next/router';

type ProjectCardProps = {
  projectImage: string;
  projectName: string;
  projectType: string;
  projectDescription: string;
  projectUrl: string;
  projectId: number;
};

export const ProjectCard = ({
  projectImage,
  projectName,
  projectType,
  projectDescription,
  projectUrl,
  projectId,
}: ProjectCardProps) => {
  const router = useRouter();
  const theme = useTheme();

  const isMobileVersion = useMediaQuery(
    theme.breakpoints.down('sm'),
  );

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 10,
      }}
    >
      <ProjectCardPaper>
        <ExperienceCardWrapper>
          {projectImage && (
            <Image
              alt={`project-image-${projectName}`}
              src={projectImage}
              width={320}
              height={220}
              style={{
                objectFit: 'cover',
                width: isMobileVersion ? '230px' : '320px',
                height: '220px',
                backgroundColor: PalletColor.auraWhite,
                border: 'thick double darkblue',
                borderRadius: '10px 10px 0px 0px',
              }}
            />
          )}

          <TitleBox>
            <Text
              type={isMobileVersion ? 'caption' : 'body2'}
            >
              <strong>{projectName}</strong>
            </Text>
          </TitleBox>

          <JobDescriptionBox>
            <Paper
              variant="outlined"
              sx={{
                width: 'fit-content',
                padding: '0px 0.5rem',
                borderRadius: '15px',
              }}
            >
              <Text
                type={isMobileVersion ? 'caption' : 'body2'}
              >
                {projectType}
              </Text>
            </Paper>

            <Text
              type={isMobileVersion ? 'caption' : 'body2'}
            >
              {projectDescription}{' '}
              <StyledLink
                href={String(projectUrl)}
                target="_blank"
              >
                {projectUrl}
              </StyledLink>
            </Text>
            <Button
              onClick={() =>
                router.push(`/project/${projectId}`)
              }
            >
              Details
            </Button>
          </JobDescriptionBox>
        </ExperienceCardWrapper>
      </ProjectCardPaper>
    </motion.div>
  );
};
