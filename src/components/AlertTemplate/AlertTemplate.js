import { positions, transitions, types } from 'react-alert';
import PropTypes from 'prop-types';
import './styles.scss';

const options = {
  position: positions.TOP_RIGHT,
  timeout: 5000,
  transition: transitions.SCALE,
  type: types.ERROR,
};

function AlertTemplate({ message }) {
  return (
    <div className="alert-template">
      {message}
    </div>
  );
}

AlertTemplate.propTypes = {
  message: PropTypes.element,
};

AlertTemplate.defaultProps = {
  message: null,
};

export { AlertTemplate, options };
