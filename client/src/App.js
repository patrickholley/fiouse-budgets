import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import SignIn from './components/SignIn';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        <Redirect to="/signin" />
      </Switch>
    </BrowserRouter>
  );
}
