import React, { FunctionComponent } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Registration, Login, Callback, Dashboard } from "./pages";

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/auth/registration">registration</Link>
          </li>
          <li>
            <Link to="/auth/login">login</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/callback" component={Callback} />
        <Route path="/auth/registration" component={Registration} />
        <Route path="/auth/login" component={Login} />
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
