import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { AUTHORIZATION_PAGE } from '../../constants/routes';

function ProtectedRoute({ component: Component, ...options }) {
  const { token } = useSelector(({ user }) => user);

  return (
    <Route
      {...options}
      render={(props) => (token
        ? <Component {...props} />
        : <Redirect to={AUTHORIZATION_PAGE} />)}
    />
  );
}

ProtectedRoute.propTypes = {
  component: PropTypes.node,
};

ProtectedRoute.defaultProps = {
  component: null,
};

export default ProtectedRoute;
