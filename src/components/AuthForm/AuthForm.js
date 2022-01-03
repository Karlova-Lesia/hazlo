import PropTypes from 'prop-types';
import './styles.scss';

function AuthForm({ children, onSubmit }) {
  return (
    <form className="auth-form" method="post" onSubmit={onSubmit}>
      <div className="px-4">
        {children}
      </div>
    </form>
  );
}

AuthForm.propTypes = {
  children: PropTypes.array,
  onSubmit: PropTypes.func,
};

AuthForm.defaultProps = {
  children: [],
  onSubmit: () => {},
};

export default AuthForm;
