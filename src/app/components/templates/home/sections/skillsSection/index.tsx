import { Section } from '@components/homeSection';
import { Text } from '@components/text';
import { TipsAndUpdates } from '@mui/icons-material';
import {
  Divider,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import Image from 'next/image';
import {
  PaperContainer,
  PaperTitle,
  TitleBox,
  LeftSideContent,
  RightSideContent,
  ContentBox,
  SkillsBox,
  SkillsContentBox,
  LanguagesContentBox,
  SkillCell,
} from './styles';
import { MainLanguages } from '@utils/skills/mainLanguages';
import { MainFrameworks } from '@utils/skills/mainFrameworks';
import { MainDesignFrameworks } from '@utils/skills/mainDesignLibs';
import { ProductionLanguages } from '@utils/skills/productionLanguages';

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
        <LeftSideContent>
          <PaperTitle elevation={2}>
            <TitleBox>
              <Text type="h4">
                <strong>B</strong>raiant <strong>M</strong>
                alta
              </Text>
            </TitleBox>
            <Divider
              sx={{
                // backgroundColor: 'red',
                borderBottomWidth: '3px',
              }}
            />

            <ContentBox>
              <Text type="body2">Front End Developer</Text>
              <Divider
                sx={{
                  // backgroundColor: 'red',
                  borderRightWidth: '3px',
                }}
              />
              <Text type="body2">4 Years Coding</Text>
            </ContentBox>
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
        </LeftSideContent>

        <RightSideContent>
          <SkillsBox>
            <TitleBox>
              <Text type="h4">
                <strong>S</strong>kills
              </Text>
            </TitleBox>
            <Divider
              sx={{
                borderBottomWidth: '3px',
              }}
            />

            <SkillsContentBox>
              <Text type="h5">Main Languages</Text>
              <LanguagesContentBox>
                {MainLanguages.map((language, index) => (
                  <SkillCell key={index} variant="outlined">
                    <Image
                      alt={language.imageAlt}
                      src={language.image}
                      title={language.imageAlt}
                      width={45}
                      height={45}
                    />
                    <Text>{language.title}</Text>
                  </SkillCell>
                ))}
              </LanguagesContentBox>

              <Text type="h5">Main Frameworks</Text>
              <LanguagesContentBox>
                {MainFrameworks.map((framework, index) => (
                  <SkillCell key={index} variant="outlined">
                    <Image
                      alt={framework.imageAlt}
                      src={framework.image}
                      title={framework.imageAlt}
                      width={45}
                      height={45}
                    />
                    <Text>{framework.title}</Text>
                  </SkillCell>
                ))}
              </LanguagesContentBox>

              <Text type="h5">Main Design Frameworks</Text>
              <LanguagesContentBox>
                {MainDesignFrameworks.map(
                  (design, index) => (
                    <SkillCell
                      key={index}
                      variant="outlined"
                    >
                      <Image
                        alt={design.imageAlt}
                        src={design.image}
                        title={design.imageAlt}
                        width={45}
                        height={45}
                      />
                      <Text>{design.title}</Text>
                    </SkillCell>
                  ),
                )}
              </LanguagesContentBox>

              <Text type="h5">Production Frameworks</Text>
              <LanguagesContentBox>
                {ProductionLanguages.map(
                  (production, index) => (
                    <SkillCell
                      key={index}
                      variant="outlined"
                    >
                      <Image
                        alt={production.imageAlt}
                        src={production.image}
                        title={production.imageAlt}
                        width={45}
                        height={45}
                      />
                      <Text>{production.title}</Text>
                    </SkillCell>
                  ),
                )}
              </LanguagesContentBox>
            </SkillsContentBox>
          </SkillsBox>

          <SkillsBox>
            <TitleBox>
              <Text type="h4">
                <strong>M</strong>ain <strong>S</strong>
                kills
              </Text>
            </TitleBox>
            <Divider
              sx={{
                // backgroundColor: 'red',
                borderBottomWidth: '3px',
              }}
            />
            <SkillsContentBox>
              <Text>
                Patterns Agile Projects Front-End Clean Code
                Project Documentation Flexibility Web
                Responsive Apps Version control Work in
                multiple projects Problem solving and
                dynamic team spirit
              </Text>
            </SkillsContentBox>
          </SkillsBox>
        </RightSideContent>
      </PaperContainer>
    </Section>
  );
};
