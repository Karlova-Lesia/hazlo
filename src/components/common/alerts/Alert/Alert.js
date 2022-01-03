import PropTypes from 'prop-types';
import './style.scss';

function Alert({ children }) {
  return (
    <div className="custom-alert">
      {children}
    </div>
  );
}

Alert.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]),
};

Alert.defaultProps = {
  children: [],
};

export default Alert;
