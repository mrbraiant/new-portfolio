import { Section } from '@components/homeSection';
import { Text } from '@components/text';
import { Paper } from '@mui/material';

export const ExperienceSection = () => {
  return (
    <Section
      sectionName="Experience"
      titleBackgroundColor="#24394C"
    >
      <Paper elevation={2}>
        <Text>
          Front-End Mid-Level with React/Next/Angular,
          LoneWolf Corp / Lupit.co / Idw Solutions ↳Leading
          multiple projects, code reviewing, providing
          support to newcomers and colleagues, creating
          tasks, coding and developing custom Systems,
          Landing Pages, Dashboards, APIs, etc… (2 Years
          working remotely) Portfolios (more than 2 years
          developing as freelancer): ↳Personal:
          https://portfolio-braioso.vercel.app,
          https://braiant-portfolio.vercel.app, Code:
          https://github.com/mrbraiant/portfolio, ↳Landing
          Pages I developed:
          https://web-fb-costa.vercel.app/,
          https://lupit.io/ ↳I Contribute to:
          https://www.iniciodesign.com.br/,
          https://apps.idwsolucoes.com.br
        </Text>
      </Paper>
    </Section>
  );
};
