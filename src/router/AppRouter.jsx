import React, { Component } from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import Login from '../pages/Login/Login'
import Admin from '../pages/Admin/Admin'
import NotFound from '../pages/NotFound/NotFound'
export default class AppRouter extends Component {
  render() {
    return (
      <HashRouter>
          <Switch>
            <Route path="/" component={Admin}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="*" component={NotFound}></Route>
          </Switch>
      </HashRouter>
    );
  }
}
