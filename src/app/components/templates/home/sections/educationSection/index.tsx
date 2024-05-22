import { Section } from '@components/homeSection';
import { Text } from '@components/text';
import { School } from '@mui/icons-material';
import Link from 'next/link';

export const EducationSection = () => {
  return (
    <Section
      sectionName="Education"
      titleBackgroundColor="#919CA5"
      iconTitle={<School />}
    >
      <Text>
        <strong> ♦ ACADEMIC EDUCATION</strong>
        <br /> <strong>Technologist</strong>, graduated in
        <strong>
          {' '}
          Systems Analysis and Development
        </strong>{' '}
        June 2021 University South of Minas - UNIS - MG -
        Brazil.
        <br />I did multiple courses of Web development as
        JavaScript, TypeScript, EcmaScript6+, using
        React.js, Next.js, Angular, Vue.js, Express.js,
        Firebase, CSS/Sass, Styled Components and lots more
        which you can find them all clicking on this link
        below:
        <br />{' '}
        <Link
          href={
            'https://www.linkedin.com/in/braiant-malta-924529210/details/certifications/'
          }
          target="_blank"
        >
          https://www.linkedin.com/in/braiant-malta-924529210/details/certifications/
        </Link>
      </Text>
    </Section>
  );
};
