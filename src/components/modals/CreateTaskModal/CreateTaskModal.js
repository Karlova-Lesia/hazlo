import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
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
import { createTaskValidationScheme } from '../../../schemas/taskSchema';
import './styles.scss';

function CreateTaskModal({ onClose, onCreate, isLoading }) {
  const renderChildren = () => (
    <>
      <h1>
        Create
        <br />
        Task
      </h1>
      <button onClick={onClose}>
        <CloseModalIcon />
      </button>
    </>
  );

  return (
    <Modal headerChildren={renderChildren()}>
      <Formik
        initialValues={{
          title: '',
          estimate: 0,
          description: '',
        }}
        validationSchema={createTaskValidationScheme}
        onSubmit={onCreate}
      >
        <Form className="modal-form">
          <div className="input-group">
            <Input labelValue="Name" type="text" name="title" placeholder="Name" />
            <div className="w-2/5">
              <Input labelValue="Estimate(m)" type="number" name="estimate" placeholder="Estimate" />
            </div>
          </div>
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

CreateTaskModal.propTypes = {
  onClose: PropTypes.func,
  onCreate: PropTypes.func,
  isLoading: PropTypes.bool,
};

CreateTaskModal.defaultProps = {
  onClose: () => {},
  onCreate: () => {},
  isLoading: false,
};

export default CreateTaskModal;
