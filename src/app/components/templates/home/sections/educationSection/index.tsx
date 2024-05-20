import { Section } from '@components/homeSection';
import { Text } from '@components/text';
import { School } from '@mui/icons-material';

export const EducationSection = () => {
  return (
    <Section
      sectionName="Education"
      titleBackgroundColor="#919CA5"
      iconTitle={<School />}
    >
      <Text>
        ♦ ACADEMIC EDUCATION
        <br /> Technologist, graduated in Systems Analysis
        and Development June 2021 University South of Minas
        - UNIS - MG - Brazil. I did multiple courses of Web
        development as JavaScript, TypeScript, EcmaScript6+,
        using React.js, Next.js, Angular, Vue.js,
        Express.js, Firebase, CSS/Sass, Styled Components
        and lots more which you can find them all clicking
        on this link below:
        https://www.linkedin.com/in/braiant-malta-924529210/details/certifications/
      </Text>
    </Section>
  );
};
