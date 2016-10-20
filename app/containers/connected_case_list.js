import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import CaseListTable from '../components/case_list/case_list_table';
import * as actions from '../action_creators';
import { getCasesById } from '../reducers';

class ConnectedCaseList extends Component {
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const { fetchCases } = this.props;
    fetchCases();
  }

  render() {
    const { cases } = this.props;
    return (
      <CaseListTable cases={cases} />
    );
  }
}

ConnectedCaseList.propTypes = {
  fetchCases: PropTypes.func.isRequired,
  cases: PropTypes.array.isRequired,
};

// mapStateToProps :: State -> { cases: [Case] }
const mapStateToProps = state => {
  const cases = getCasesById(state);
  return ({
    cases: Object.keys(cases).map((id) => cases[id]),
  });
};

// connector :: Function
const connector = connect(
  mapStateToProps,
  actions,
);

// ConnectedCaseList :: React.Component
ConnectedCaseList = connector(ConnectedCaseList); // eslint-disable-line no-class-assign

export default ConnectedCaseList;
