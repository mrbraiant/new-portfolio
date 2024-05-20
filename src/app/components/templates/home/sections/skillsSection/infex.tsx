import { Section } from '@components/homeSection';
import { Text } from '@components/text';
import { TipsAndUpdates } from '@mui/icons-material';

export const SkillsSection = () => {
  return (
    <Section
      sectionName="Skills"
      titleBackgroundColor="#6D7B88"
      iconTitle={<TipsAndUpdates />}
    >
      <Text>
        ♦ SKILLS
        <br />
        JavaScript / EcmaScript / TypeScript HTML / CSS /
        PHP Design Patterns Agile Projects React / Next /
        Angular / Vue.js Node / GraphQL / Express / Firebase
        Materialize / Material UI / Bootstrap Strapi / Figma
        <br />♦ MAIN SKILLS
        <br /> Front-End Clean Code Project Documentation
        Flexibility Web Responsive Apps Version control Work
        in multiple projects Problem solving and dynamic
        team spirit
      </Text>
    </Section>
  );
};
