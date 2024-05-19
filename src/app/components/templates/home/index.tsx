import { Section } from '@components/homeSection';
import { Layout } from '@components/layout';
import { ContactSection } from './sections/contactSection';
import { BlogSection } from './sections/blogSection';
import { AboutSection } from './sections/aboutSection';
import { ExperienceSection } from './sections/experienceSection';

export const HomeTemplate = () => {
  return (
    <Layout>
      <AboutSection />

      <ExperienceSection />

      <Section
        sectionName="Projects"
        titleBackgroundColor="#485A6A"
      />

      <Section
        sectionName="Skills"
        titleBackgroundColor="#6D7B88"
      />

      <Section
        sectionName="Education"
        titleBackgroundColor="#919CA5"
      />

      <ContactSection />

      <BlogSection />
    </Layout>
  );
};
