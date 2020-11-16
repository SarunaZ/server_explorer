import React from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({
  component: Component,
  isLoggedIn,
  redirect,
   ...rest
 }) => {

  return (
    <Route
      {...rest}
      render={ props => {
        return isLoggedIn
        ? (<Component {...props} />)
         : (<Redirect
              to={redirect}
            />)
        }
      }
    />
  );
};
