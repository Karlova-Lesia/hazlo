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
  } = props;

  return (
    <div className={wrapperClasses}>
      <button
        className="font-ptm w-36 text-white py-2 px-4 flex justify-around items-center bg-mint"
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
  wrapperClasses: PropTypes.string,
  children: PropTypes.array,
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
};

Button.defaultProps = {
  wrapperClasses: 'btn-wrapper',
  children: [],
  type: 'button',
  disabled: false,
  isLoading: false,
};

export default Button;
