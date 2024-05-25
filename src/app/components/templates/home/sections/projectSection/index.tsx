import { ProjectCard } from '@components/cards/projectCard';
import { Section } from '@components/homeSection';
import { TableChart } from '@mui/icons-material';
import { ExperienceCardBox } from '../experienceSection/styles';
import { Projects } from '@utils/projects';

export const ProjectSection = () => {
  return (
    <Section
      sectionName="Projects"
      titleBackgroundColor="#485A6A"
      iconTitle={<TableChart />}
    >
      <ExperienceCardBox>
        {Projects?.map((project, index) => (
          <ProjectCard
            key={index}
            projectId={project.id}
            projectCardImage={project.projectCardImage}
            projectImage={project.projectImage}
            projectName={project.projectName}
            projectType={project.projectType}
            projectIntro={project.projectIntro}
            projectUrl={project.projectUrl}
          />
        ))}
      </ExperienceCardBox>
    </Section>
  );
};
