import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.scss';

function AuthFormLink({ text, path, link }) {
  return (
    <div className="link-wrapper">
      <span className="pr-2">{text}</span>
      <Link to={path} className="link">{link}</Link>
    </div>
  );
}

AuthFormLink.propTypes = {
  text: PropTypes.string,
  path: PropTypes.string,
  link: PropTypes.string,
};

AuthFormLink.defaultProps = {
  text: '',
  path: '',
  link: '',
};

export default AuthFormLink;
