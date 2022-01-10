import PropTypes from 'prop-types';
import './styles.scss';

function Input(props) {
  const {
    label,
    type,
    value,
    placeholder,
    onChange,
  } = props;

  return (
    <div>
      <label className="label">
        {label}
        <input
          className="input"
          value={value}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  label: '',
  type: '',
  value: '',
  placeholder: '',
  onChange: () => {},
};

export default Input;
