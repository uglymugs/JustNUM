import React, { Component, PropTypes } from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import * as fromReducers from '../reducers';

const mapStateToProps =
  (state) =>
    ({
      isLoggedIn: fromReducers.getIsLoggedIn(state),
      lastUrl: fromReducers.getLastUrl(state),
    });


const connector =
  compose(withRouter, connect(mapStateToProps));


const requiresAuthentication =
  (MyComponent, redirectPath, requiredAuthStatus = true) =>
    connector(class AuthenticatedComponent extends Component {

      static propTypes = {
        isLoggedIn: PropTypes.bool.isRequired,
        lastUrl: PropTypes.string,
        router: PropTypes.object.isRequired,
      }

      componentWillMount(): void {
        this.checkAuth();
      }

      componentWillReceiveProps(): void {
        this.checkAuth();
      }

      componentDidUpdate(): void {
        this.checkAuth();
      }

      checkAuth(): void {
        if (this.props.isLoggedIn !== requiredAuthStatus) {
          this.props.router.push(this.props.lastUrl || redirectPath);
        }
      }

      render() {
        return this.props.isLoggedIn === requiredAuthStatus
          ? (<MyComponent {...this.props} />)
          : null;
      }
    });


export default requiresAuthentication;
