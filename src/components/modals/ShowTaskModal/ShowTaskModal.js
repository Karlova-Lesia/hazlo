import PropTypes from 'prop-types';
import Modal from '../Modal';
import CloseModalIcon from '../../icons/CloseModalIcon';
import './styles.scss';
import ModalContentItem from '../common/ModalContentItem';

function ShowTaskModal({
  title, description, estimate, onClose,
}) {
  return (
    <Modal headerChildren={(
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
    )}
    >
      <div className="content-wrapper">
        <div className="item-group">
          <div className="w-3/5 item-wrapper">
            <ModalContentItem labelValue="Name" itemValue={title} className="input" />
          </div>
          <div className="w-2/5 item-wrapper">
            <ModalContentItem labelValue="Estimate(m)" itemValue={estimate} className="input" />
          </div>
        </div>
        <div className="item-wrapper">
          <ModalContentItem labelValue="Description" itemValue={description} className="textarea" />
        </div>
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
