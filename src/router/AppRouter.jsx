import React, { Component } from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import Admin from '../pages/Admin/Admin'
import Login from '../pages/Login/Login'
import NotFound from '../pages/NotFound/NotFound'
export default class AppRouter extends Component {
  render() {
    return (
      <HashRouter>
          <Switch>
            <Route exact path="/" component={Admin}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="*" component={NotFound}></Route>
          </Switch>
      </HashRouter>
    );
  }
}
