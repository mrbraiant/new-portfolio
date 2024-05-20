import { Section } from '@components/homeSection';
import { Text } from '@components/text';
import {
  Code,
  EmojiPeople,
  LogoDev,
} from '@mui/icons-material';
import { Paper } from '@mui/material';
import { PalletColor } from '@utils/palletColor';
import Image from 'next/image';

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
        <Paper
          elevation={8}
          sx={{
            // display: 'flex',
            // flexDirection: 'column',
            // alignItems: 'center',
            // padding: '1rem',
            width: '350px',
            // height: '400px',
            border: '20px solid #00192F',
            borderRadius: '10px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              // padding: '1rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                padding: '0px 0.5rem',
                backgroundColor: PalletColor.auraWhite,
                border: 'thick double darkblue',
              }}
            >
              <Text>Braiant Malta</Text>
              <LogoDev />
            </div>
            <Image
              alt="avatar"
              src={'/images/exp/br.png'}
              width={310}
              height={300}
              style={{
                objectFit: 'cover',
                width: '310px',
                height: '150px',
                border: 'thick double darkblue',
              }}
            />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                padding: '0px 0.5rem',
                backgroundColor: PalletColor.auraWhite,
                border: 'thick double darkblue',
              }}
            >
              <Text>Front End Developer</Text>
              <Code />
            </div>
            <div
              style={{
                display: 'flex',
                // alignItems: 'center',
                // justifyContent: 'space-between',
                width: '100%',
                padding: '0px 0.5rem',
                backgroundColor: '#fafafa',
                border: 'thick double darkblue',
              }}
            >
              <Text type="body2">
                Leading multiple projects, code reviewing,
                providing support to newcomers and
                colleagues, creating tasks, coding and
                developing custom Systems, Landing Pages,
                Dashboards, APIs, etc… (2 Years working
                remotely) Portfolios (more than 2 years
                developing as freelancer)
              </Text>
            </div>
          </div>
        </Paper>
      </div>
    </Section>
  );
};
