import { EducationCard } from '@components/cards/educationCard';
import { Section } from '@components/homeSection';
import { StyledLink } from '@components/styledLink';
import { Text } from '@components/text';
import { School } from '@mui/icons-material';
import { EducationContentBox, TextBox } from './styles';

export const EducationSection = () => {
  return (
    <Section
      sectionName="Education"
      titleBackgroundColor="#919CA5"
      iconTitle={<School />}
    >
      <EducationContentBox>
        <EducationCard />
        <TextBox>
          <Text>
            I did multiple Web development courses as
            JavaScript, TypeScript, EcmaScript6+, using
            React.js, Next.js, Angular, Vue.js, Express.js,
            Firebase, CSS/Sass, Styled Components and lots
            more which you can find them all clicking on
            this link below:
            <br />{' '}
            <StyledLink
              href={
                'https://www.linkedin.com/in/braiant-malta-924529210/details/certifications/'
              }
              target="_blank"
            >
              https://www.linkedin.com/in/braiant-malta-924529210/details/certifications/
            </StyledLink>
          </Text>
        </TextBox>
      </EducationContentBox>
    </Section>
  );
};
