import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createTask } from '../../api/tasks';
import CreateTaskIcon from '../icons/CreateTaskIcon';
import CreateTaskModal from '../modals/CreateTaskModal';
import './styles.scss';

function ColumnHeader({ id, title, addCard }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { id: projectId } = useParams();

  const openCreateTaskModal = () => {
    setIsOpen(true);
  };

  const closeCreateTaskModal = () => {
    setIsOpen(false);
    setIsLoading(false);
  };

  const onCreateTask = (task) => {
    const newTask = {
      ...task,
      projectId,
      columnId: id,
    };

    setIsLoading(true);

    createTask(newTask)
      .then(() => {
        addCard({ ...newTask, id });
      })
      .finally(closeCreateTaskModal);
  };

  const renderCreateTaskModal = () => {
    if (!isOpen) return null;

    return createPortal(
      <CreateTaskModal
        onClose={closeCreateTaskModal}
        onCreate={onCreateTask}
        isLoading={isLoading}
      />,
      document.body,
    );
  };

  return (
    <>
      <div className="card-title">
        {title}
      </div>
      <button
        className="column-btn"
        type="button"
        onClick={openCreateTaskModal}
      >
        <CreateTaskIcon />
      </button>
      {renderCreateTaskModal()}
    </>
  );
}

ColumnHeader.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  addCard: PropTypes.func,
};

ColumnHeader.defaultProps = {
  id: null,
  title: '',
  addCard: () => {},
};

export default ColumnHeader;
