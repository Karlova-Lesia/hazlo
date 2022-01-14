import PropTypes from 'prop-types';
import { Field } from 'formik';
import './styles.scss';

const Input = (props) => {
  const {
    label,
    type,
    name,
    placeholder,
  } = props;

  return (
    <Field name={name}>
      {({
        field,
        meta,
      }) => (
        <div className="mb-5">
          <label className="label">{label}</label>
          <input className="input" type={type} placeholder={placeholder} {...field} />
          {meta.touched && meta.error && (
            <span className="error-message">{meta.error}</span>
          )}
        </div>
      )}
    </Field>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  label: '',
  type: '',
  name: '',
  placeholder: '',
};

export default Input;
