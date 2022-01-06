import { Route, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function GuestRoute({ component: Component, ...options }) {
  const { token } = useSelector(({ user }) => user);
  const history = useHistory();

  if (token) history.goBack();

  return (
    <Route {...options} component={Component} />
  );
}

GuestRoute.propTypes = {
  component: PropTypes.func,
};

GuestRoute.defaultProps = {
  component: () => {},
};

export default GuestRoute;
