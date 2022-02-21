import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import { editTask } from '../../../api/tasks';
import CloseModalIcon from '../../icons/CloseModalIcon';
import Modal from '../Modal';
import Input from '../../common/Input';
import DescriptionEditor from '../common/DescriptionEditor';
import Button from '../../common/Button';
import ModalCreateProjectIcon from '../../icons/ModalCreateProjectIcon';
import { projectValidationScheme } from '../../../schemas/projectSchema';

function EditTaskModal({
  id, title, estimate, description, columnId, onClose, onEdit,
}) {
  const [isLoading, setIsLoading] = useState(false);

  const { id: projectId } = useParams();

  const handleEditTask = (taskData) => {
    setIsLoading(true);

    editTask(id, {
      ...taskData, projectId, columnId,
    })
      .then((changedTask) => {
        onEdit(id, changedTask);

        onClose();
      })
      .finally(setIsLoading(false));
  };

  const renderHeader = () => (
    <>
      <h1>
        Edit
        <br />
        Task
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
          estimate,
          description,
        }}
        validationSchema={projectValidationScheme}
        onSubmit={handleEditTask}
      >
        <Form className="modal-form">
          <div className="input-group">
            <div>
              <Input labelValue="Name" type="text" name="title" placeholder="Name" />
            </div>
            <div className="w-2/5">
              <Input labelValue="Estimate(m)" type="number" name="estimate" placeholder="Estimate" />
            </div>
          </div>
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

EditTaskModal.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  estimate: PropTypes.number,
  description: PropTypes.string,
  columnId: PropTypes.number,
  onClose: PropTypes.func,
  onEdit: PropTypes.func,
};

EditTaskModal.defaultProps = {
  id: 0,
  title: '',
  estimate: 0,
  description: '',
  columnId: 0,
  onClose: () => {},
  onEdit: () => {},
};

export default EditTaskModal;
