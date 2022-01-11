import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { MAIN_PAGE } from '../../constants/routes';

function GuestRoute({ component: Component, ...options }) {
  const { token } = useSelector(({ user }) => user);

  return (
    <Route
      {...options}
      render={(props) => (!token
        ? <Component {...props} />
        : <Redirect to={MAIN_PAGE} />)}
    />
  );
}

GuestRoute.propTypes = {
  component: PropTypes.func,
};

GuestRoute.defaultProps = {
  component: () => {},
};

export default GuestRoute;
