import PropTypes from 'prop-types';
import { Field } from 'formik';
import './styles.scss';

const Textarea = (props) => {
  const {
    name,
    placeholder,
  } = props;

  return (
    <Field name={name}>
      {({
        field,
        meta,
      }) => (
        <div className="textarea-wrapper">
          <textarea className="textarea" placeholder={placeholder} {...field} />
          {meta.touched && meta.error && (
            <span className="error-message">{meta.error}</span>
          )}
        </div>
      )}
    </Field>
  );
};

Textarea.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

Textarea.defaultProps = {
  name: '',
  placeholder: '',
};

export default Textarea;
