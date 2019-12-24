import React from 'react';
import AuthHeader from './AuthHeader';
import { withRouter } from 'react-router-dom';
import { headerTitles } from "../../constants/authRoutes";

function AuthHeaderContainer({ children, location }) {
  return (
    <AuthHeader
      title={headerTitles[location.pathname]}
    >
      {children}
    </AuthHeader>
  );
}

export default withRouter(AuthHeaderContainer);
