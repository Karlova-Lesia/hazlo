import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import './styles.scss';

function Button(props) {
  const {
    children,
    type,
    disabled,
    isLoading,
  } = props;

  return (
    <div className="btn-wrapper">
      <button
        className="btn bg-mint"
        type={type}
        disabled={disabled}
      >
        {children}
        {isLoading && <Loader type="TailSpin" color="lightgrey" height="20px" width="20px" radius={3} arialLabel="loading-indicator" />}
      </button>
    </div>
  );
}

Button.propTypes = {
  children: PropTypes.string,
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
};

Button.defaultProps = {
  children: '',
  type: 'button',
  disabled: false,
  isLoading: false,
};

export default Button;
