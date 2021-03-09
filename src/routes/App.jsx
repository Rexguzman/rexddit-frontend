import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Layout from '../layout/Layout';

import {
  ChannelPage,
  Home,
  Login,
  NotFound,
  Register,
  CreateChannel,
  Profile,
} from '../pages';

const App = ({ user }) => {
  console.log(user);

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login">
            {user.isLogged ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route exact path="/register">
            {user.isLogged ? <Redirect to="/" /> : <Register />}
          </Route>
          <Route exact path="/create">
            {user.isLogged ? <CreateChannel /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/profile">
            {user.isLogged ? <Profile /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/channel/:id" component={ChannelPage} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(App);
