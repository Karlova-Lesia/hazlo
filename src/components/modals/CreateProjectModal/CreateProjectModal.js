import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import { createProject } from '../../../api/projects';
import Modal from '../Modal';
import Input from '../../common/Input';
import Textarea from '../../common/Textarea';
import CloseModalIcon from '../../icons/CloseModalIcon';
import ModalCreateProjectIcon from '../../icons/ModalCreateProjectIcon';
import Button from '../../common/Button';
import FontIcon from '../../icons/FontIcon';
import FontWeightIcon from '../../icons/FontWeightIcon';
import FontItalicIcon from '../../icons/FontItalicIcon';
import FontColorIcon from '../../icons/FontColorIcon';
import { projectValidationScheme } from '../../../schemas/projectSchema';
import './styles.scss';

function CreateProjectModal({ onClose, onCreate }) {
  const [isLoading, setIsLoading] = useState(false);

  const { id: userId } = useSelector(({ user }) => user);

  const createNewProject = ({ title, description }) => {
    setIsLoading(true);

    createProject({ userId, title, description }).then(({ id }) => {
      setIsLoading(false);
      onCreate({
        id, title, description, userId,
      });
      onClose();
    });
  };

  return (
    <Modal
      headerChildren={(
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
      )}
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
          <div className="label-wrapper">
            <label className="label">Description</label>
            <div className="modal-btn-group">
              <button>
                <FontIcon />
              </button>
              <button>
                <FontWeightIcon />
              </button>
              <button>
                <FontItalicIcon />
              </button>
              <button>
                <FontColorIcon />
              </button>
            </div>
          </div>
          <Textarea name="description" placeholder="Description" />
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
