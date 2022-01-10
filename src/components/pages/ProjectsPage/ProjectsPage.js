import MainContent from '../../common/MainContent';
import EditProjectIcon from '../../../icons/EditProjectIcon';
import DeleteProjectIcon from '../../../icons/DeleteProjectIcon';
import Button from '../../common/Button';
import CreateProjectIcon from '../../../icons/CreateProjectIcon';
import './styles.scss';

function ProjectsPage() {
  return (
    <MainContent title="Projects">
      <div className="projects-block-wrapper">
        <ul className="projects-list">
          <li className="project-item">
            <h4 className="project-item-title">First project</h4>
            <div className="btn-group">
              <button>
                <EditProjectIcon />
              </button>
              <button>
                <DeleteProjectIcon />
              </button>
            </div>
          </li>
          <li className="project-item">
            <h4 className="project-item-title">Second project</h4>
            <div className="btn-group">
              <button>
                <EditProjectIcon />
              </button>
              <button>
                <DeleteProjectIcon />
              </button>
            </div>
          </li>
        </ul>
        <Button>
          <CreateProjectIcon />
          Create
        </Button>
      </div>
    </MainContent>
  );
}

export default ProjectsPage;
