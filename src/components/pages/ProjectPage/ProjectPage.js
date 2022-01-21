import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProject } from '../../../api/projects';
import MainContent from '../../common/MainContent';
import TaskBoard from '../../TaskBoard';

function ProjectPage() {
  const [project, setProject] = useState({});

  const { id } = useParams();

  useEffect(() => getProject({ id }).then((response) => setProject(response)), []);

  return (
    <MainContent title={project.title}>
      <TaskBoard projectId={id} />
    </MainContent>
  );
}

export default ProjectPage;
