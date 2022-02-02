import { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import { editProject } from '../../../api/projects';
import { ModalContext } from '../../../helpers/contexts';
import Modal from '../Modal';
import CloseModalIcon from '../../icons/CloseModalIcon';
import Input from '../../common/Input';
import FontIcon from '../../icons/FontIcon';
import FontWeightIcon from '../../icons/FontWeightIcon';
import FontItalicIcon from '../../icons/FontItalicIcon';
import FontColorIcon from '../../icons/FontColorIcon';
import Textarea from '../../common/Textarea';
import Button from '../../common/Button';
import ModalCreateProjectIcon from '../../icons/ModalCreateProjectIcon';
import { projectValidationScheme } from '../../../schemas/projectSchema';

function EditProjectModal({
  id, title, description, onClose,
}) {
  const { onEditProject } = useContext(ModalContext);

  const [isLoading, setIsLoading] = useState(false);

  const { id: userId } = useSelector(({ user }) => user);

  const handleEditProject = (projectData) => {
    setIsLoading(true);

    editProject(id, { ...projectData, userId })
      .then((newProject) => onEditProject(id, newProject));

    setIsLoading(false);

    onClose();
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
  onClose: PropTypes.func,
};

EditProjectModal.defaultProps = {
  id: 0,
  title: '',
  description: '',
  onClose: () => {},
};

export default EditProjectModal;
