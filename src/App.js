import './index.css';
import React from "react";
import Login from "./Components/Login/Login";
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Servers from "./Components/Servers/Servers";
import { useSelector } from 'react-redux';
import { ProtectedRoute } from "./Components/Login/PrivateRoute";

function App() {
  let isLoggedIn = useSelector(state => state.isLoggedIn);

  return (
    <div className="p">
      <Router>
        <Switch>
          <ProtectedRoute exact path="/" component={ Servers } isLoggedIn={isLoggedIn} redirect='/login'/>
          <ProtectedRoute path="/login" component={ Login } isLoggedIn={!isLoggedIn} redirect='/'/>
          <Route path="*" component={ () => '404' }/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
