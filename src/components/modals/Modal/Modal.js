import PropTypes from 'prop-types';
import './styles.scss';

function Modal(props) {
  const {
    headerChildren,
    children,
  } = props;

  return (
    <div className="modal-wrapper">
      <div className="modal">
        <header className="modal-header">
          {headerChildren}
        </header>
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  headerChildren: PropTypes.node,
  children: PropTypes.node,
};

Modal.defaultProps = {
  headerChildren: null,
  children: null,
};

export default Modal;
