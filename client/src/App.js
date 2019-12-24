import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import AuthHeader from "./lib/components/AuthHeader";
import CreateAccount from "./components/CreateAccount";
import { createAccountPath } from './lib/constants/authRoutes';

export default function App() {
  return (
    <BrowserRouter>
      <AuthHeader>
        <Route exact path={createAccountPath} component={CreateAccount} />
        <Redirect to={createAccountPath} />
      </AuthHeader>
    </BrowserRouter>
  );
}
