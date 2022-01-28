import PropTypes from 'prop-types';
import EditProjectIcon from '../icons/EditProjectIcon';
import DeleteProjectIcon from '../icons/DeleteProjectIcon';
import './styles.scss';

function TaskItem({ title, onShow }) {
  return (
    <div className="task-item">
      <div className="task-item-title">
        <button onClick={onShow}>
          <h4>{title}</h4>
        </button>
      </div>
      <div className="task-btn-group">
        <button>
          <EditProjectIcon />
        </button>
        <button>
          <DeleteProjectIcon />
        </button>
      </div>
    </div>
  );
}

TaskItem.propTypes = {
  title: PropTypes.string,
  onShow: PropTypes.func,
};

TaskItem.defaultProps = {
  title: '',
  onShow: () => {},
};

export default TaskItem;
