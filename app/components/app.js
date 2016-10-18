import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Main from './main';
import CaseLayout from './case_layout';
import ConnectedCaseList from '../containers/connected_case_list';
import ConnectedCaseForm from '../containers/connected_case_form';
import FakeHome from './homepage';


const App = ({ store }) =>
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={FakeHome} />
        <Route path="cases" component={CaseLayout}>
          <IndexRoute component={ConnectedCaseList} />
          <Route path=":view(/:caseId)" component={ConnectedCaseForm} />
        </Route>
      </Route>
    </Router>
  </Provider>;

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
