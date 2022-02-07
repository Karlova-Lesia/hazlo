import { useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import ShowTaskDetailsIcon from '../icons/ShowTaskDetailsIcon';
import EditProjectIcon from '../icons/EditProjectIcon';
import DeleteProjectIcon from '../icons/DeleteProjectIcon';
import ShowTaskModal from '../modals/ShowTaskModal';
import EditTaskModal from '../modals/EditTaskModal';
import DeleteTaskModal from '../modals/DeleteTaskModal';
import './styles.scss';

function TaskCard({
  id, title, description, estimate, columnId, onEdit, onDelete,
}) {
  const [isShowTaskModalOpen, setIsShowTaskModalOpen] = useState(false);
  const [isEditTaskModalOpen, setIsEditTaskModalOpen] = useState(false);
  const [isDeleteTaskModalOpen, setIsDeleteTaskModalOpen] = useState(false);

  const closeShowTaskModal = () => {
    setIsShowTaskModalOpen(false);
  };

  const closeEditTaskModal = () => {
    setIsEditTaskModalOpen(false);
  };

  const closeDeleteTaskModal = () => {
    setIsDeleteTaskModalOpen(false);
  };

  const openShowTaskModal = () => {
    setIsShowTaskModalOpen(true);
  };

  const openEditTaskModal = () => {
    setIsEditTaskModalOpen(true);
  };

  const openDeleteTaskModal = () => {
    setIsDeleteTaskModalOpen(true);
  };

  const renderShowTaskModal = () => {
    if (!isShowTaskModalOpen) return null;

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
    if (!isEditTaskModalOpen) return null;

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

  const renderDeleteTaskModal = () => {
    if (!isDeleteTaskModalOpen) return null;

    return createPortal(
      <DeleteTaskModal
        id={id}
        columnId={columnId}
        onClose={closeDeleteTaskModal}
        onDelete={onDelete}
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
          <button onClick={openDeleteTaskModal}>
            <DeleteProjectIcon />
          </button>
        </div>
      </div>
      {renderShowTaskModal()}
      {renderEditTaskModal()}
      {renderDeleteTaskModal()}
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
  onDelete: PropTypes.func,
};

TaskCard.defaultProps = {
  id: 0,
  title: '',
  description: '',
  estimate: 0,
  columnId: 0,
  onEdit: () => {},
  onDelete: () => {},
};

export default TaskCard;
