import React from 'react';
import { Provider as AlertProvider } from 'react-alert';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Header from '../Header';
import RegistrationPage from '../pages/RegistrationPage';
import { AlertTemplate, options } from '../AlertTemplate';
import { REGISTRATION_PAGE } from '../../constants/routes';

function App() {
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <Header />
      <Router>
        <Switch>
          <Route exact path={REGISTRATION_PAGE}>
            <RegistrationPage />
          </Route>
        </Switch>
      </Router>
    </AlertProvider>
  );
}

export default App;
