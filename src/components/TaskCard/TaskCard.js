import { useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import ShowTaskDetailsIcon from '../icons/ShowTaskDetailsIcon';
import EditProjectIcon from '../icons/EditProjectIcon';
import DeleteProjectIcon from '../icons/DeleteProjectIcon';
import ShowTaskModal from '../modals/ShowTaskModal';
import EditTaskModal from '../modals/EditTaskModal';
import './styles.scss';

function TaskCard({
  id, title, description, estimate, columnId, onEdit,
}) {
  const [isOpenShowTaskModal, setIsOpenShowTaskModal] = useState(false);
  const [isOpenEditTaskModal, setIsOpenEditTaskModal] = useState(false);

  const closeShowTaskModal = () => {
    setIsOpenShowTaskModal(false);
  };

  const closeEditTaskModal = () => {
    setIsOpenEditTaskModal(false);
  };

  const openShowTaskModal = () => {
    setIsOpenShowTaskModal(true);
  };

  const openEditTaskModal = () => {
    setIsOpenEditTaskModal(true);
  };

  const renderShowTaskModal = () => {
    if (!isOpenShowTaskModal) return null;

    return createPortal(
      <ShowTaskModal
        title={title}
        description={description}
        estimate={estimate}
        onClose={closeShowTaskModal}
      />,
      document.body,
    );
  };

  const renderEditTaskModal = () => {
    if (!isOpenEditTaskModal) return null;

    return createPortal(
      <EditTaskModal
        id={id}
        title={title}
        description={description}
        estimate={estimate}
        columnId={columnId}
        onClose={closeEditTaskModal}
        onEdit={onEdit}
      />,
      document.body,
    );
  };

  return (
    <>
      <div className="task-item">
        <div className="task-item-title">
          <h4>{title}</h4>
        </div>
        <div className="task-btn-group">
          <button onClick={openShowTaskModal}>
            <ShowTaskDetailsIcon />
          </button>
          <button onClick={openEditTaskModal}>
            <EditProjectIcon />
          </button>
          <button>
            <DeleteProjectIcon />
          </button>
        </div>
      </div>
      {renderShowTaskModal()}
      {renderEditTaskModal()}
    </>
  );
}

TaskCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  estimate: PropTypes.number,
  columnId: PropTypes.number,
  onEdit: PropTypes.func,
};

TaskCard.defaultProps = {
  id: 0,
  title: '',
  description: '',
  estimate: 0,
  columnId: 0,
  onEdit: () => {},
};

export default TaskCard;
