import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import { createProject } from '../../../api/projects';
import Modal from '../Modal';
import Input from '../../common/Input';
import DescriptionEditor from '../common/DescriptionEditor';
import CloseModalIcon from '../../icons/CloseModalIcon';
import ModalCreateProjectIcon from '../../icons/ModalCreateProjectIcon';
import Button from '../../common/Button';
import { projectValidationScheme } from '../../../schemas/projectSchema';
import './styles.scss';

function CreateProjectModal({ onClose, onCreate }) {
  const [isLoading, setIsLoading] = useState(false);

  const { id: ownerId } = useSelector(({ user }) => user);

  const createNewProject = ({ title, description }) => {
    setIsLoading(true);

    createProject({
      title, description, ownerId, memberIds: [ownerId],
    })
      .then(({ id }) => {
        setIsLoading(false);

        onCreate({
          id, title, description, ownerId, memberIds: [ownerId],
        });

        onClose();
      });
  };

  const renderHeader = () => (
    <>
      <h1>
        Create
        <br />
        Project
      </h1>
      <button onClick={onClose}>
        <CloseModalIcon />
      </button>
    </>
  );

  return (
    <Modal
      headerChildren={renderHeader()}
    >
      <Formik
        initialValues={{
          title: '',
          description: '',
        }}
        validationSchema={projectValidationScheme}
        onSubmit={createNewProject}
      >
        <Form className="modal-form">
          <Input labelValue="Name" type="text" name="title" placeholder="Name" />
          <DescriptionEditor />
          <Button wrapperClasses="modal-btn-wrapper" type="submit" isLoading={isLoading}>
            <ModalCreateProjectIcon />
            Create
          </Button>
        </Form>
      </Formik>
    </Modal>
  );
}

CreateProjectModal.propTypes = {
  onClose: PropTypes.func,
  onCreate: PropTypes.func,
};

CreateProjectModal.defaultProps = {
  onClose: () => {},
  onCreate: () => {},
};

export default CreateProjectModal;
