import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import EditProjectIcon from '../icons/EditProjectIcon';
import DeleteProjectIcon from '../icons/DeleteProjectIcon';
import { PROJECTS_ROUTE } from '../../constants/routes';
import './styles.scss';

function ProjectItem({ id, title }) {
  return (
    <li className="project-item">
      <div className="project-item-title">
        <Link to={`${PROJECTS_ROUTE}/${id}`}>
          <h4>{title}</h4>
        </Link>
      </div>
      <div className="btn-group">
        <button>
          <EditProjectIcon />
        </button>
        <button>
          <DeleteProjectIcon />
        </button>
      </div>
    </li>
  );
}

ProjectItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
};

ProjectItem.defaultProps = {
  id: 0,
  title: '',
};

export default ProjectItem;
