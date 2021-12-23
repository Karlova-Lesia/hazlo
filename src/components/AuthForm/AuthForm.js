import PropTypes from 'prop-types';
import './styles.scss';

function AuthForm({ children }) {
  return (
    <form className="auth-form" method="post">
      <div className="px-4">
        {children}
      </div>
    </form>
  );
}

AuthForm.propTypes = {
  children: PropTypes.string,
};

AuthForm.defaultProps = {
  children: '',
};

export default AuthForm;
