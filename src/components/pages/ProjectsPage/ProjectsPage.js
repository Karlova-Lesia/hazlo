import MainContent from '../../common/MainContent';
import ProjectsList from '../../ProjectsList';
import Button from '../../common/Button';
import CreateProjectIcon from '../../../icons/CreateProjectIcon';
import './styles.scss';

function ProjectsPage() {
  return (
    <MainContent title="Projects">
      <div className="projects-block-wrapper">
        <ProjectsList />
        <Button>
          <CreateProjectIcon />
          Create
        </Button>
      </div>
    </MainContent>
  );
}

export default ProjectsPage;
