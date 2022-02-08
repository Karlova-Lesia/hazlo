import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { deleteProject } from '../../../api/projects';
import DeleteModal from '../DeleteModal';
import { ProjectsPageContext } from '../../../contexts/projectsContext';

function DeleteProjectModal({ id, onClose }) {
  const { onDeleteProject } = useContext(ProjectsPageContext);

  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteProject = (event) => {
    event.preventDefault();

    setIsLoading(true);

    deleteProject(id)
      .then(() => {
        onClose();

        onDeleteProject(id);
      })
      .finally(setIsLoading(false));
  };

  return (
    <DeleteModal onClose={onClose} onDelete={handleDeleteProject} isLoading={isLoading}>
      Project
    </DeleteModal>
  );
}

DeleteProjectModal.propTypes = {
  id: PropTypes.number,
  onClose: PropTypes.func,
};

DeleteProjectModal.defaultProps = {
  id: null,
  onClose: () => {},
};

export default DeleteProjectModal;
