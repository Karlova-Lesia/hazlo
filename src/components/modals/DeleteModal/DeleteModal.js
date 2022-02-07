import PropTypes from 'prop-types';
import HeaderModal from '../common/HeaderModal';
import Button from '../../common/Button';
import CloseModalIcon from '../../icons/CloseModalIcon';
import DeleteProjectIcon from '../../icons/DeleteProjectIcon';
import './styles.scss';

function DeleteModal({
  children, onClose, onDelete, isLoading,
}) {
  return (
    <div className="delete-modal-wrapper">
      <div className="delete-modal">
        <HeaderModal onClose={onClose}>
          Delete
          <br />
          {children}
        </HeaderModal>
        <p className="header-text">Are you sure?</p>
        <form className="delete-modal-btn-group" onSubmit={onDelete}>
          <Button onClick={onClose} style={{ backgroundColor: 'gray' }}>
            <CloseModalIcon style={{ color: 'white', size: '24px' }} />
            Cancel
          </Button>
          <Button type="submit" isLoading={isLoading}>
            <DeleteProjectIcon style={{ color: 'white', size: '16px' }} />
            Delete
          </Button>
        </form>
      </div>
    </div>
  );
}

DeleteModal.propTypes = {
  children: PropTypes.string,
  onClose: PropTypes.func,
  onDelete: PropTypes.func,
  isLoading: PropTypes.bool,
};

DeleteModal.defaultProps = {
  children: '',
  onClose: () => {},
  onDelete: () => {},
  isLoading: false,
};

export default DeleteModal;
