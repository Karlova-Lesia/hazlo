import PropTypes from 'prop-types';
import CloseModalIcon from '../../../icons/CloseModalIcon';
import './styles.scss';

function HeaderModal({ children, onClose }) {
  return (
    <div className="modal-header">
      <h1>
        {children}
      </h1>
      <button onClick={onClose}>
        <CloseModalIcon />
      </button>
    </div>
  );
}

HeaderModal.propTypes = {
  children: PropTypes.array,
  onClose: PropTypes.func,
};

HeaderModal.defaultProps = {
  children: [],
  onClose: () => {},
};

export default HeaderModal;
