import { Text } from '@components/text';
import {
  AboutCardPaper,
  AboutCardWrapper,
  JobDescriptionBox,
  TitleBox,
} from './styles';
import { Code, LogoDev } from '@mui/icons-material';
import Image from 'next/image';
import { useMediaQuery, useTheme } from '@mui/material';

export const AboutCard = () => {
  const theme = useTheme();

  const isMobileVersion = useMediaQuery(
    theme.breakpoints.down('sm'),
  );

  return (
    <AboutCardPaper elevation={8}>
      <AboutCardWrapper>
        <TitleBox>
          <Text>Braiant Malta</Text>
          <LogoDev />
        </TitleBox>

        <Image
          alt="avatar"
          src={'/images/exp/br.png'}
          width={310}
          height={300}
          style={{
            objectFit: 'cover',
            width: isMobileVersion ? '270px' : '310px',
            height: '150px',
            border: 'thick double darkblue',
          }}
        />
        <TitleBox>
          <Text>Front End Developer</Text>
          <Code />
        </TitleBox>
        <JobDescriptionBox>
          <Text type="body2">
            Leading multiple projects, code reviewing,
            providing support to newcomers and colleagues,
            creating tasks, coding and developing custom
            Systems, Landing Pages, Dashboards, APIs, etc…
            (2 Years working remotely) Portfolios (more than
            2 years developing as freelancer)
          </Text>
        </JobDescriptionBox>
      </AboutCardWrapper>
    </AboutCardPaper>
  );
};
