import { Layout } from '@components/layout';
import { ContactSection } from './sections/contactSection';
import { BlogSection } from './sections/blogSection';
import { AboutSection } from './sections/aboutSection';
import { ExperienceSection } from './sections/experienceSection';
import { SkillsSection } from './sections/skillsSection';
import { EducationSection } from './sections/educationSection';
import { ProjectSection } from './sections/projectSection';

export const HomeTemplate = () => {
  return (
    <Layout>
      <AboutSection />

      <ExperienceSection />

      <ProjectSection />

      <SkillsSection />

      <EducationSection />

      <ContactSection />

      <BlogSection />
    </Layout>
  );
};
