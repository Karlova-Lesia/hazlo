import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProject } from '../../../api/projects';
import MainContent from '../../common/MainContent';
import TaskBoard from '../../TaskBoard';
import MembersColumn from '../../MembersColumn';
import './styles.scss';

function ProjectPage() {
  const [project, setProject] = useState();

  const { id } = useParams();

  useEffect(() => getProject({ id })
    .then((response) => {
      setProject(response);
    }), [id]);

  return project ? (
    <MainContent title={project.title} style={{ flexDirection: 'column' }} className="project-main-content-wrapper">
      <p className="description-text">{project.description}</p>
      <div className="project-main-content">
        <TaskBoard projectId={id} />
        <MembersColumn project={project} />
      </div>
    </MainContent>
  ) : <> </>;
}

export default ProjectPage;
