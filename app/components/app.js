import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import Main from './main';
import requiresAuthentication from '../containers/requires_authentication';
import ConnectedCaseList from '../containers/connected_case_list';
import ConnectedCaseForm from '../containers/connected_case_form';
import ConnectedTaskTabs from '../containers/connected_task_tabs.js';
import Login from '../containers/login.js';
import PageLayout from './page_layout.js';

const redirectIfNotAuthenticated = (Component, redirectPath) =>
  requiresAuthentication(Component, redirectPath, true);

const redirectIfAuthenticated = (Component, redirectPath) =>
  requiresAuthentication(Component, redirectPath, false);


const App = ({ store }) =>
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRedirect to="/authenticated" />
        <Route path="login" component={redirectIfAuthenticated(Login, '/authenticated')} />
        <Route path="authenticated" component={redirectIfNotAuthenticated(PageLayout, '/login')}>
          <IndexRedirect to="tasks" />
          <Route path="tasks" component={ConnectedTaskTabs} />
          <Route path="cases" component={ConnectedCaseList} />
          <Route path="cases/:view(/:caseRef)" component={ConnectedCaseForm} />
        </Route>
      </Route>
    </Router>
  </Provider>;

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
