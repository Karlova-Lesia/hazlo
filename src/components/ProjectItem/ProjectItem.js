import PropTypes from 'prop-types';
import EditProjectIcon from '../../icons/EditProjectIcon';
import DeleteProjectIcon from '../../icons/DeleteProjectIcon';
import './styles.scss';

function ProjectItem({ title }) {
  return (
    <li className="project-item">
      <h4 className="project-item-title">{ title }</h4>
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
  title: PropTypes.string,
};

ProjectItem.defaultProps = {
  title: '',
};

export default ProjectItem;
