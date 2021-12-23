import PropTypes from 'prop-types';
import './styles.scss';

function Input(props) {
  const {
    label,
    type,
    placeholder,
  } = props;

  return (
    <div>
      <label className="label">
        {label}
        <input className="input" type={type} placeholder={placeholder} />
      </label>
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  label: '',
  type: '',
  placeholder: '',
};

export default Input;
