import PropTypes from 'prop-types';
import Modal from '../Modal';
import CloseModalIcon from '../../icons/CloseModalIcon';
import ModalContentItem from '../common/ModalContentItem';
import './styles.scss';

function ShowTaskModal({
  title, description, estimate, onClose,
}) {
  const renderChildren = () => (
    <>
      <h1>
        View
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
      <div className="card">
        <div className="card-item-group">
          <ModalContentItem label="Name" itemValue={title} className="item-card-value-short" wrapperClass="w-3/5" />
          <ModalContentItem label="Estimate(m)" itemValue={estimate} className="item-card-value-short" wrapperClass="w-2/5" />
        </div>
        <ModalContentItem label="Description" itemValue={description} className="item-card-value-long" />
      </div>
    </Modal>
  );
}

ShowTaskModal.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  estimate: PropTypes.number,
  onClose: PropTypes.func,
};

ShowTaskModal.defaultProps = {
  title: '',
  description: '',
  estimate: 0,
  onClose: () => {},
};

export default ShowTaskModal;
