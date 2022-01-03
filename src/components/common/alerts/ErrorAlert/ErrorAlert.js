import PropTypes from 'prop-types';
import Alert from '../Alert';
import ErrorIcon from '../../../../icons/ErrorIcon';

function ErrorAlert({ children }) {
  return (
    <Alert>
      <ErrorIcon />
      {children}
    </Alert>
  );
}

ErrorAlert.propTypes = {
  children: PropTypes.string,
};

ErrorAlert.defaultProps = {
  children: '',
};

export default ErrorAlert;
