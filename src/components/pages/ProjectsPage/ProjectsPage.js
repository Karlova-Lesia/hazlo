import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getProjects } from '../../../api/projects';
import MainContent from '../../common/MainContent';
import ProjectsList from '../../ProjectsList';
import Button from '../../common/Button';
import CreateProjectIcon from '../../../icons/CreateProjectIcon';
import './styles.scss';

function ProjectsPage() {
  const [projects, setProjects] = useState([]);

  const { id: userId } = useSelector(({ user }) => user);

  useEffect(() => getProjects({ userId }).then((response) => setProjects(response)), []);

  return (
    <MainContent title="Projects">
      <div className="projects-block-wrapper">
        <ProjectsList projects={projects} />
        <Button>
          <CreateProjectIcon />
          Create
        </Button>
      </div>
    </MainContent>
  );
}

export default ProjectsPage;
