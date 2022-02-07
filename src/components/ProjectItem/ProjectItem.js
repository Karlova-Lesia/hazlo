import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import EditProjectIcon from '../icons/EditProjectIcon';
import DeleteProjectIcon from '../icons/DeleteProjectIcon';
import EditProjectModal from '../modals/EditProjectModal';
import DeleteProjectModal from '../modals/DeleteProjectModal';
import { PROJECTS_ROUTE } from '../../constants/routes';
import './styles.scss';

function ProjectItem({
  id, title, description,
}) {
  const [isEditProjectModalOpen, setIsEditProjectModalOpen] = useState(false);
  const [isDeleteProjectModalOpen, setIsDeleteProjectModalOpen] = useState(false);

  const openEditProjectModal = () => {
    setIsEditProjectModalOpen(true);
  };

  const openDeleteProjectModal = () => {
    setIsDeleteProjectModalOpen(true);
  };

  const closeEditProjectModal = () => {
    setIsEditProjectModalOpen(false);
  };

  const closeDeleteProjectModal = () => {
    setIsDeleteProjectModalOpen(false);
  };

  const renderEditProjectModal = () => {
    if (!isEditProjectModalOpen) return null;

    return createPortal(
      <EditProjectModal
        onClose={closeEditProjectModal}
        id={id}
        title={title}
        description={description}
      />,
      document.body,
    );
  };

  const renderDeleteProjectModal = () => {
    if (!isDeleteProjectModalOpen) return null;

    return createPortal(
      <DeleteProjectModal
        id={id}
        onClose={closeDeleteProjectModal}
      />,
      document.body,
    );
  };

  return (
    <>
      <li className="project-item">
        <div className="project-item-title">
          <Link to={`${PROJECTS_ROUTE}/${id}`}>
            <h4>{title}</h4>
          </Link>
        </div>
        <div className="btn-group">
          <button onClick={openEditProjectModal}>
            <EditProjectIcon />
          </button>
          <button onClick={openDeleteProjectModal}>
            <DeleteProjectIcon />
          </button>
        </div>
      </li>
      {renderEditProjectModal()}
      {renderDeleteProjectModal()}
    </>
  );
}

ProjectItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
};

ProjectItem.defaultProps = {
  id: 0,
  title: '',
  description: '',
};

export default ProjectItem;
