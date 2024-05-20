import { Section } from '@components/homeSection';
import { Layout } from '@components/layout';
import { ContactSection } from './sections/contactSection';
import { BlogSection } from './sections/blogSection';
import { AboutSection } from './sections/aboutSection';
import { ExperienceSection } from './sections/experienceSection';
import { TableChart } from '@mui/icons-material';
import { SkillsSection } from './sections/skillsSection/infex';
import { EducationSection } from './sections/educationSection';

export const HomeTemplate = () => {
  return (
    <Layout>
      <AboutSection />

      <ExperienceSection />

      <Section
        sectionName="Projects"
        titleBackgroundColor="#485A6A"
        iconTitle={<TableChart />}
      />

      <SkillsSection />

      <EducationSection />

      <ContactSection />

      <BlogSection />
    </Layout>
  );
};
