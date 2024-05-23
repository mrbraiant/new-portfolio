import { ExperienceCard } from '@components/cards/experienceCard';
import { FlipCard } from '@components/cards/flipCard';
import { Section } from '@components/homeSection';
import { Leaderboard } from '@mui/icons-material';
import {
  Paper,
  // useMediaQuery,
  // useTheme,
} from '@mui/material';

export const ExperienceSection = () => {
  // const theme = useTheme();

  // const isMobileVersion = useMediaQuery(
  //   theme.breakpoints.down('md'),
  // );

  return (
    <Section
      sectionName="Experience"
      titleBackgroundColor="#24394C"
      iconTitle={<Leaderboard />}
    >
      <Paper elevation={2}>
        {/* <Text>
          Front-End Mid-Level with React/Next/Angular,
          LoneWolf Corp / Lupit.co / Idw Solutions <br />
          ↳Leading multiple projects, code reviewing,
          providing support to newcomers and colleagues,
          creating tasks, coding and developing custom
          Systems, Landing Pages, Dashboards, APIs, etc… (2
          Years working remotely) Portfolios (more than 2
          years developing as freelancer):
          <br />
          ↳Personal: https://portfolio-braioso.vercel.app,
          https://braiant-portfolio.vercel.app, Code:
          https://github.com/mrbraiant/portfolio,
          <br />
          ↳Landing Pages I developed:
          https://web-fb-costa.vercel.app/,
          https://lupit.io/
          <br />
          ↳I Contribute to:
          https://www.iniciodesign.com.br/,
          https://apps.idwsolucoes.com.br
        </Text> */}
      </Paper>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          // justifyContent: isMobileVersion
          //   ? 'center'
          //   : undefined,
          gap: '1rem',
        }}
      >
        <FlipCard
          showBackImage
          frontContent={
            <ExperienceCard
              title="lupit.io"
              titleLogo="/images/exp/lupit-icon.svg"
              cardImage="/images/exp/lupit-image.png"
              jobTitle="Front End Developer"
              jobType="Remote"
              jobDescription="Leading multiple projects, code reviewing,
            providing support to newcomers and colleagues,
            creating tasks, coding and developing custom
            Systems, Landing Pages, Dashboards, APIs, etc…"
            />
          }
        />
        <FlipCard
          showBackImage
          frontContent={
            <ExperienceCard
              title="iDw Solutions"
              titleLogo="/images/exp/idw.webp"
              cardImage="/images/exp/idw-image.png"
              jobTitle="Front End Developer"
              jobType="Remote"
              jobDescription="Leading multiple projects, developing features,
          creating and managing tasks, coding and developing custom
          Systems, Landing Pages, Dashboards, APIs using Angular and Next.js"
            />
          }
        />
        <FlipCard
          showBackImage
          frontContent={
            <ExperienceCard
              title="Free lance"
              titleLogo="/images/logo.png"
              cardImage="/images/exp/freelance.webp"
              jobTitle="Front End Developer"
              jobType="Remote"
              jobDescription="Developing new features for Systems, Landing Pages, web sites, web apps, 
          developing new Landing Pages, Custom Dashboards, APIs using Angular and 
          Next.js, PHP, React.js"
            />
          }
        />
      </div>
    </Section>
  );
};
