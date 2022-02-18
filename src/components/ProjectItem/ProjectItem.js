import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import EditProjectIcon from '../icons/EditProjectIcon';
import DeleteProjectIcon from '../icons/DeleteProjectIcon';
import AddMembersModal from '../modals/AddMembersModal';
import EditProjectModal from '../modals/EditProjectModal';
import AddMembersIcon from '../icons/AddMembersIcon';
import DeleteProjectModal from '../modals/DeleteProjectModal';
import { PROJECTS_ROUTE } from '../../constants/routes';
import './styles.scss';

function ProjectItem({
  id, title, description, members, ownerId, memberIds,
}) {
  const { id: userId } = useSelector(({ user }) => user);

  const [isEditProjectModalOpen, setIsEditProjectModalOpen] = useState(false);
  const [isDeleteProjectModalOpen, setIsDeleteProjectModalOpen] = useState(false);
  const [isAddMembersModalOpen, setIsAddMembersModalOpen] = useState(false);

  const openEditProjectModal = () => {
    setIsEditProjectModalOpen(true);
  };

  const openDeleteProjectModal = () => {
    setIsDeleteProjectModalOpen(true);
  };

  const openAddMembersModal = () => {
    setIsAddMembersModalOpen(true);
  };

  const closeEditProjectModal = () => {
    setIsEditProjectModalOpen(false);
  };

  const closeDeleteProjectModal = () => {
    setIsDeleteProjectModalOpen(false);
  };

  const closeAddMembersModal = () => {
    setIsAddMembersModalOpen(false);
  };

  const renderEditProjectModal = () => {
    if (!isEditProjectModalOpen) return null;

    return createPortal(
      <EditProjectModal
        onClose={closeEditProjectModal}
        id={id}
        title={title}
        description={description}
        ownerId={ownerId}
        memberIds={memberIds}
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

  const renderAddMembersModal = () => {
    if (!isAddMembersModalOpen) return null;

    return createPortal(
      <AddMembersModal
        id={id}
        title={title}
        description={description}
        members={members}
        ownerId={ownerId}
        memberIds={memberIds}
        onClose={closeAddMembersModal}
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
        {ownerId === userId && (
        <div className="btn-group">
          <button onClick={openAddMembersModal}>
            <AddMembersIcon />
          </button>
          <button onClick={openEditProjectModal}>
            <EditProjectIcon />
          </button>
          <button onClick={openDeleteProjectModal}>
            <DeleteProjectIcon />
          </button>
        </div>
        )}
      </li>
      {renderEditProjectModal()}
      {renderDeleteProjectModal()}
      {renderAddMembersModal()}
    </>
  );
}

ProjectItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  ownerId: PropTypes.number,
  members: PropTypes.array,
  memberIds: PropTypes.array,
};

ProjectItem.defaultProps = {
  id: 0,
  title: '',
  description: '',
  ownerId: null,
  members: [],
  memberIds: [],
};

export default ProjectItem;
