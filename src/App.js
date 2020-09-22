import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import * as ROUTES from './constants/routes';
import Home from './pages/Home';
import Browse from './pages/Browse';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={ ROUTES.HOME } component={ Home }/>
        <Route path={ ROUTES.BROWSE } component={ Browse }/>
        <Route path={ ROUTES.SIGN_IN } component={ SignIn }/>
        <Route path={ ROUTES.SIGN_UP } component={ SignUp }/>
      </Switch>
    </Router>
  );
}

export default App;
