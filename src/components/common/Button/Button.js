import PropTypes from 'prop-types';
import './styles.scss';

function Button(props) {
  const {
    children,
    className,
    type,
    active,
    disabled,
  } = props;

  return (
    <div className="btn-wrapper">
      <button
        className={className}
        type={type}
        active={active}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
}

Button.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
  active: PropTypes.bool,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  children: '',
  className: '',
  type: 'button',
  active: true,
  disabled: false,
};

export default Button;
