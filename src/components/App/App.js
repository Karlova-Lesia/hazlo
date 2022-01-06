import { Provider as AlertProvider } from 'react-alert';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import Header from '../Header';
import RegistrationPage from '../pages/RegistrationPage';
import AuthorizationPage from '../pages/AuthorizationPage';
import { AlertTemplate, options } from '../AlertTemplate';
import GuestRoute from '../GuestRoute/GuestRoute';
import { REGISTRATION_PAGE, AUTHORIZATION_PAGE } from '../../constants/routes';

function App() {
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <Header />
      <Router>
        <Switch>
          <GuestRoute path={REGISTRATION_PAGE} component={RegistrationPage} />
          <GuestRoute path={AUTHORIZATION_PAGE} component={AuthorizationPage} />
        </Switch>
      </Router>
    </AlertProvider>
  );
}

export default App;
