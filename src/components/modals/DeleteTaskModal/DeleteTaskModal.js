import { useState } from 'react';
import PropTypes from 'prop-types';
import { deleteTask } from '../../../api/tasks';
import DeleteModal from '../DeleteModal';

function DeleteTaskModal({
  id, columnId, onClose, onDelete,
}) {
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteTask = (event) => {
    event.preventDefault();

    setIsLoading(true);

    deleteTask(id)
      .then(() => {
        onClose();

        onDelete(columnId, { id });
      })
      .finally(setIsLoading(false));
  };

  return (
    <DeleteModal onClose={onClose} onDelete={handleDeleteTask} isLoading={isLoading}>
      Task
    </DeleteModal>
  );
}

DeleteTaskModal.propTypes = {
  id: PropTypes.number,
  columnId: PropTypes.number,
  onClose: PropTypes.func,
  onDelete: PropTypes.func,
};

DeleteTaskModal.defaultProps = {
  id: null,
  columnId: null,
  onClose: () => {},
  onDelete: () => {},
};

export default DeleteTaskModal;
