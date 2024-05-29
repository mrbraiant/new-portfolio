import { Text } from '@components/text';
import {
  AboutCardPaper,
  AboutCardWrapper,
  JobDescriptionBox,
  MainTitleBox,
  TitleBox,
} from './styles';
import { Code, LogoDev } from '@mui/icons-material';
import Image from 'next/image';
import { useMediaQuery, useTheme } from '@mui/material';
import { ColorPalette } from '@utils/colorPalette';

export const AboutCard = () => {
  const theme = useTheme();

  const isMobileVersion = useMediaQuery(
    theme.breakpoints.down('sm'),
  );

  return (
    <AboutCardPaper elevation={8}>
      <AboutCardWrapper>
        <MainTitleBox>
          <Text>
            <strong>Braiant Malta</strong>
          </Text>
          <LogoDev />
        </MainTitleBox>

        <Image
          alt="avatar"
          src={'/images/exp/br.png'}
          width={320}
          height={150}
          style={{
            objectFit: 'cover',
            width: isMobileVersion ? '230px' : '320px',
            height: '150px',
            backgroundColor: ColorPalette.auraWhite,
            border: 'thick double darkblue',
          }}
        />
        <TitleBox>
          <Text
            type={isMobileVersion ? 'caption' : 'body2'}
          >
            <strong>Front End Developer</strong>
          </Text>
          <Code />
        </TitleBox>
        <JobDescriptionBox>
          <Text
            type={isMobileVersion ? 'caption' : 'body2'}
          >
            Leading multiple projects, code reviewing,
            support, managing tasks, coding and developing
          </Text>
        </JobDescriptionBox>
      </AboutCardWrapper>
    </AboutCardPaper>
  );
};
