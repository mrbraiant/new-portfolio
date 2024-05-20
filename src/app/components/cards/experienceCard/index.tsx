import { Text } from '@components/text';
import { useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import {
  ExperienceCardPaper,
  ExperienceCardWrapper,
  JobDescriptionBox,
  JobTypeBox,
  MainTitleBox,
  TitleBox,
  YearsTab,
} from './styles';
import { motion } from 'framer-motion';

type ExperienceCardProps = {
  title: string;
  titleLogo: string;
  cardImage: string;
  jobTitle: string;
  jobType: string;
  jobDescription: string;
};

export const ExperienceCard = ({
  title,
  titleLogo,
  cardImage,
  jobTitle,
  jobType,
  jobDescription,
}: ExperienceCardProps) => {
  const theme = useTheme();

  const isMobileVersion = useMediaQuery(
    theme.breakpoints.down('sm'),
  );

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 10,
      }}
    >
      <ExperienceCardPaper elevation={8}>
        <ExperienceCardWrapper>
          <MainTitleBox>
            <Text>
              <strong>{title}</strong>
            </Text>
            <Image
              alt="exp-logo-1"
              src={titleLogo}
              width={40}
              height={40}
            />
          </MainTitleBox>
          <Image
            alt="avatar"
            src={cardImage}
            width={310}
            height={300}
            style={{
              objectFit: 'cover',
              width: isMobileVersion ? '270px' : '320px',
              height: '150px',
              border: 'thick double darkblue',
            }}
          />
          <TitleBox>
            <Text>
              <strong>{jobTitle}</strong>
            </Text>
            <JobTypeBox>
              <Text type="body2">
                <strong>{jobType}</strong>
              </Text>
            </JobTypeBox>
          </TitleBox>
          <JobDescriptionBox>
            <Text type="body2">{jobDescription}</Text>

            <YearsTab>
              <Text type="body2">
                <strong>2years+</strong>
              </Text>
            </YearsTab>
          </JobDescriptionBox>
        </ExperienceCardWrapper>
      </ExperienceCardPaper>
    </motion.div>
  );
};
