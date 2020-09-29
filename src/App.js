import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import * as ROUTES from './constants/routes';
import Home from './pages/Home';
import Browse from './pages/Browse';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import { IsUserRedirect, ProtectedRoute } from './helpers/routes';

function App() {
  const user = {};

  return (
    <Router>
      <Switch>
        <IsUserRedirect user={ user } loggedInPath={ ROUTES.BROWSE } path={ ROUTES.HOME } exact >
          <Home />
        </IsUserRedirect>

        <ProtectedRoute user={ user } path={ ROUTES.BROWSE }>
          <Browse />
        </ProtectedRoute>

        <IsUserRedirect user={ user } loggedInPath={ ROUTES.BROWSE } path={ ROUTES.SIGN_IN }>
          <SignIn />
        </IsUserRedirect>
        
        <IsUserRedirect user={ user } loggedInPath={ ROUTES.BROWSE } path={ ROUTES.SIGN_UP }>
          <SignUp />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}

export default App;
