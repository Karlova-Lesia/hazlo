import PropTypes from 'prop-types';
import { Field } from 'formik';
import './styles.scss';

const Input = (props) => {
  const {
    labelValue,
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
        <div className="input-wrapper">
          <label className="label">{labelValue}</label>
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
  labelValue: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  labelValue: '',
  type: '',
  name: '',
  placeholder: '',
};

export default Input;
