import React from "react";
import { Route, Redirect } from "react-router-dom";
import { PropTypes } from 'prop-types';

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

ProtectedRoute.propTypes = {
  component: PropTypes.func,
  isLoggedIn: PropTypes.bool,
  redirect: PropTypes.string
};