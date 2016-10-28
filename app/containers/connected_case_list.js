import { connect } from 'react-redux';
import moment from 'moment';
import React, { Component, PropTypes } from 'react';
import CaseListTable from '../components/case_list/case_list_table';
import * as actions from '../action_creators';
import { getEnteredCasesFilter, getCasesById } from '../reducers';
import CaseListFilter from './case_list_filter';

class ConnectedCaseList extends Component {
  componentDidMount() {
    const { fetchCases } = this.props;
    fetchCases();
  }

  render() {
    const { cases } = this.props;
    return (
      <div>
        <CaseListFilter />
        <CaseListTable cases={cases} />
      </div>
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
  const filter = getEnteredCasesFilter(state);
  // filter results on client if we are still waiting for api call
  return ({
    cases: Object.keys(cases)
    .map((id) => ({
      ...cases[id],
      dateCreated: moment(cases[id].dateCreated, 'x').format('DD/MM/YY'),
    }))
    .filter((caseObj) => caseObj.caseId.startsWith(filter)),
  });
};

// connector :: Function
const connector = connect(
  mapStateToProps,
  { fetchCases: actions.fetchCases },
);

// ConnectedCaseList :: React.Component
ConnectedCaseList = connector(ConnectedCaseList); // eslint-disable-line no-class-assign

export default ConnectedCaseList;
