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
import { PalletColor } from '@utils/palletColor';

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
          width={320}
          height={150}
          style={{
            objectFit: 'cover',
            width: isMobileVersion ? '230px' : '320px',
            height: '150px',
            backgroundColor: PalletColor.auraWhite,
            border: 'thick double darkblue',
          }}
        />
        <TitleBox>
          <Text
            type={isMobileVersion ? 'caption' : 'body2'}
          >
            <strong>{jobTitle}</strong>
          </Text>
          <JobTypeBox>
            <Text
              type={isMobileVersion ? 'caption' : 'body2'}
            >
              <strong>{jobType}</strong>
            </Text>
          </JobTypeBox>
        </TitleBox>
        <JobDescriptionBox>
          <Text
            type={isMobileVersion ? 'caption' : 'body2'}
          >
            {jobDescription}
          </Text>

          <YearsTab>
            <Text
              type={isMobileVersion ? 'caption' : 'body2'}
            >
              <strong>2years+</strong>
            </Text>
          </YearsTab>
        </JobDescriptionBox>
      </ExperienceCardWrapper>
    </ExperienceCardPaper>
  );
};
