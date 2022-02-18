import { useContext, useState } from 'react';
import { Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import { editProject } from '../../../api/projects';
import { ProjectsPageContext } from '../../../contexts/projectsContext';
import Modal from '../Modal';
import CloseModalIcon from '../../icons/CloseModalIcon';
import Input from '../../common/Input';
import DescriptionEditor from '../common/DescriptionEditor';
import Button from '../../common/Button';
import ModalCreateProjectIcon from '../../icons/ModalCreateProjectIcon';
import { projectValidationScheme } from '../../../schemas/projectSchema';

function EditProjectModal({
  id, title, description, ownerId, memberIds, onClose,
}) {
  const { onEditProject } = useContext(ProjectsPageContext);

  const [isLoading, setIsLoading] = useState(false);

  const handleEditProject = (projectData) => {
    setIsLoading(true);

    editProject(id, { ...projectData, ownerId, memberIds })
      .then((newProject) => {
        onEditProject(id, newProject);

        onClose();
      })
      .finally(setIsLoading(false));
  };

  const renderHeader = () => (
    <>
      <h1>
        Edit
        <br />
        Project
      </h1>
      <button onClick={onClose}>
        <CloseModalIcon />
      </button>
    </>
  );

  return (
    <Modal headerChildren={renderHeader()}>
      <Formik
        initialValues={{
          title,
          description,
        }}
        validationSchema={projectValidationScheme}
        onSubmit={handleEditProject}
      >
        <Form className="modal-form">
          <Input labelValue="Name" type="text" name="title" placeholder="Name" />
          <DescriptionEditor />
          <Button wrapperClasses="modal-btn-wrapper" type="submit" isLoading={isLoading}>
            <ModalCreateProjectIcon />
            Edit
          </Button>
        </Form>
      </Formik>
    </Modal>
  );
}

EditProjectModal.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  ownerId: PropTypes.number,
  memberIds: PropTypes.array,
  onClose: PropTypes.func,
};

EditProjectModal.defaultProps = {
  id: null,
  title: '',
  description: '',
  ownerId: null,
  memberIds: [],
  onClose: () => {},
};

export default EditProjectModal;
