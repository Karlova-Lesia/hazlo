import { useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import EditProjectIcon from '../icons/EditProjectIcon';
import DeleteProjectIcon from '../icons/DeleteProjectIcon';
import ShowTaskModal from '../modals/ShowTaskModal';
import './styles.scss';

function TaskCard({
  title, description, estimate,
}) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const closeShowTaskModal = () => {
    setIsOpenModal(false);
  };

  const openShowTaskModal = () => {
    setIsOpenModal(true);
  };

  const renderShowTaskModal = () => {
    if (!isOpenModal) return null;

    return createPortal(
      <ShowTaskModal
        onClose={closeShowTaskModal}
        title={title}
        description={description}
        estimate={estimate}
      />,
      document.body,
    );
  };

  return (
    <>
      <div className="task-item">
        <button className="task-item-title" onClick={openShowTaskModal}>
          <h4>{title}</h4>
        </button>
        <div className="task-btn-group">
          <button>
            <EditProjectIcon />
          </button>
          <button>
            <DeleteProjectIcon />
          </button>
        </div>
      </div>
      {renderShowTaskModal()}
    </>
  );
}

TaskCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  estimate: PropTypes.number,
};

TaskCard.defaultProps = {
  title: '',
  description: '',
  estimate: 0,
};

export default TaskCard;
