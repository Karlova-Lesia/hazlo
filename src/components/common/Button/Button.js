import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import './styles.scss';

function Button(props) {
  const {
    wrapperClasses,
    children,
    type,
    disabled,
    isLoading,
    onClick,
    style,
  } = props;

  return (
    <div className={wrapperClasses}>
      <button
        className="btn bg-mint"
        type={type}
        disabled={disabled || isLoading}
        onClick={onClick}
        style={style}
      >
        {children}
        {
          isLoading
            && <Loader type="TailSpin" color="lightgrey" height="20px" width="20px" radius={3} arialLabel="loading-indicator" />
        }
      </button>
    </div>
  );
}

Button.propTypes = {
  wrapperClasses: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  style: PropTypes.object,
};

Button.defaultProps = {
  wrapperClasses: 'btn-wrapper',
  children: '',
  type: 'button',
  disabled: false,
  isLoading: false,
  onClick: () => {},
  style: {},
};

export default Button;
