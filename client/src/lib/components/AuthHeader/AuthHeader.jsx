import React from 'react';
import "./AuthHeader.scss";
import Logo from "../../../assets/images/f_logo_clear.png";

function AuthHeader({ children, title }) {
  const Heading = `h${title === "Fiouse Budgets" ? 1 : 2}`;

  return (
    <div className="auth-header">
      <img alt="fiouse logo" className="auth-header__logo" src={Logo} />
      <Heading className="auth-header__title">{title}</Heading>
      <div className="auth-header__route-view">
        {children}
      </div>
    </div>
  );
}

export default AuthHeader;
