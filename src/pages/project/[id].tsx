import { useRouter } from 'next/router';
import { Projects } from '@utils/projects';
import { ProjectTemplate } from '@components/templates/project';

export default function Project() {
  const router = useRouter();

  const { query, isReady } = router;
  const { id } = query;

  const project = Projects.filter(
    (project) => project.id === Number(id),
  );
  const projectContent = project[0];

  return isReady ? (
    <ProjectTemplate projectContent={projectContent} />
  ) : null;
}
