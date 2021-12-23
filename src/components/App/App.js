import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Header from '../Header';
import RegistrationPage from '../pages/RegistrationPage';
import { REGISTRATION_PAGE } from '../../constants/routes';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path={REGISTRATION_PAGE}>
            <RegistrationPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
