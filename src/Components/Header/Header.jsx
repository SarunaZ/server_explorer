import React from 'react';
import Logo from "../../Images/logo.png";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../Store/Actions/PublicActions";

function Header() {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutAction());
  }

  return (
    <header className="Header constraints-md m0a flex space-between align-center p-2 b-sizing-border">
      <img className="Header__logo" src={ Logo } alt="Website logo"/>
      <span className="Header__logout-button fs-medium cp" onClick={() => logout()}>Logout</span>
    </header>
  );
}

export default Header;