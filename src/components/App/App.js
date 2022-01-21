import { Provider as AlertProvider } from 'react-alert';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import Header from '../Header';
import ProjectsPage from '../pages/ProjectsPage';
import ProjectPage from '../pages/ProjectPage';
import RegistrationPage from '../pages/RegistrationPage';
import AuthorizationPage from '../pages/AuthorizationPage';
import { AlertTemplate, options } from '../AlertTemplate';
import ProtectedRoute from '../ProtectedRoute';
import GuestRoute from '../GuestRoute/GuestRoute';
import {
  MAIN_PAGE, PROJECT_PAGE, REGISTRATION_PAGE, AUTHORIZATION_PAGE,
} from '../../constants/routes';

function App() {
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <Router>
        <Header />
        <Switch>
          <ProtectedRoute exact path={MAIN_PAGE} component={ProjectsPage} />
          <ProtectedRoute exact path={PROJECT_PAGE} component={ProjectPage} />
          <GuestRoute exact path={REGISTRATION_PAGE} component={RegistrationPage} />
          <GuestRoute exact path={AUTHORIZATION_PAGE} component={AuthorizationPage} />
        </Switch>
      </Router>
    </AlertProvider>
  );
}

export default App;
