import { Section } from '@components/homeSection';
import { Text } from '@components/text';
import { TipsAndUpdates } from '@mui/icons-material';
import {
  Divider,
  Paper,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { PalletColor } from '@utils/palletColor';
import Image from 'next/image';
import {
  PaperContainer,
  PaperTitle,
  NameBox,
  TitleBox,
} from './styles';

export const SkillsSection = () => {
  const theme = useTheme();

  const isMobileVersion = useMediaQuery(
    theme.breakpoints.down('sm'),
  );

  return (
    <Section
      sectionName="Skills"
      titleBackgroundColor="#6D7B88"
      iconTitle={<TipsAndUpdates />}
    >
      <PaperContainer elevation={2}>
        <div style={{ width: '100%' }}>
          <PaperTitle elevation={2}>
            <NameBox>
              <Text type="h4">
                <strong>B</strong>raiant <strong>M</strong>
                alta
              </Text>
            </NameBox>
            <Divider
              sx={{
                // backgroundColor: 'red',
                borderBottomWidth: '3px',
              }}
            />

            <TitleBox>
              <Text type="body2">Front End Developer</Text>
              <Divider
                sx={{
                  // backgroundColor: 'red',
                  borderRightWidth: '3px',
                }}
              />
              <Text type="body2">4 Years Coding</Text>
            </TitleBox>
          </PaperTitle>

          <Image
            alt="skill-image"
            src={'/images/exp/br-1.png'}
            width={310}
            height={400}
            style={{
              objectFit: 'cover',
              position: 'relative',
              top: '-15px',
              width: isMobileVersion ? '230px' : '310px',
              zIndex: 1,
              borderRadius: '10px',
            }}
          />
        </div>

        <div style={{ width: '100%' }}>
          <Paper
            elevation={2}
            sx={{
              width: 'fit-content',
              padding: '0.2rem',
              borderRadius: '5px',
              // padding: '0px 0.5rem',
            }}
          >
            <div
              style={{
                padding: '0px 1rem',
                background: `linear-gradient(to right, ${PalletColor.canadianLake} 0%, ${PalletColor.auraWhite} 100%)`,
              }}
            >
              <Text type="h4">
                <strong>S</strong>kills
              </Text>
            </div>
            <Divider
              sx={{
                // backgroundColor: 'red',
                borderBottomWidth: '3px',
              }}
            />

            <div
              style={{
                display: 'flex',
                gap: '1rem',
                padding: '0px 1rem',
              }}
            >
              <Text type="body2">HTML</Text>
              <Divider
                sx={{
                  // backgroundColor: 'red',
                  borderRightWidth: '3px',
                }}
              />
              <Text type="body2">Javascript</Text>
            </div>
            <Text>
              ♦ SKILLS
              <br />
              JavaScript / EcmaScript / TypeScript HTML /
              CSS / PHP Design Patterns Agile Projects React
              / Next / Angular / Vue.js Node / GraphQL /
              Express / Firebase Materialize / Material UI /
              Bootstrap Strapi / Figma
              <br />♦ MAIN SKILLS
              <br /> Front-End Clean Code Project
              Documentation Flexibility Web Responsive Apps
              Version control Work in multiple projects
              Problem solving and dynamic team spirit
            </Text>
          </Paper>
        </div>
      </PaperContainer>
    </Section>
  );
};
