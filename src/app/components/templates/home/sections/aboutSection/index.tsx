import { AboutCard } from '@components/cards/aboutCard';
import { FlipCard } from '@components/cards/flipCard';
import { Section } from '@components/homeSection';
import { Text } from '@components/text';
import { EmojiPeople } from '@mui/icons-material';

export const AboutSection = () => {
  return (
    <Section
      sectionName="About"
      iconTitle={<EmojiPeople />}
    >
      <Text>
        I&apos;m <strong>Front End Developer</strong>, my
        main skills are{' '}
        <strong>JavaScript/TypeScript</strong>, Front End
        libs <strong>React/Next/Angular</strong> and{' '}
        <strong>Node/Express/Firebase</strong> however{' '}
        <strong>
          I&apos;m able to learn quickly any development
          languages and frameworks
        </strong>{' '}
        as I&apos;m studying and doing projects with ASP.net
        and C# at the moment.
        <br />
        My <strong>experiences</strong> are about{' '}
        <strong>
          developing Customised Systems, Landing Pages, Web
          Apps, Web Sites, Dashboards, APIs
        </strong>{' '}
        always providing a complete experience to users even
        using mobile devices or a 4K TV.
        <br />I like to use{' '}
        <strong>Component Orientation</strong> through
        Next.js because it&apos;s a powerful React framework
        which provides a smooth and a clean architectural
        organisation within the project making it very
        productive. I&apos;m also studying more about
        backend using mongoDb.
      </Text>
      <br />

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <FlipCard
          frontContent={<AboutCard />}
          showBackImage
        />
      </div>
    </Section>
  );
};
