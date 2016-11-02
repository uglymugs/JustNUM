import { connect } from 'react-redux';
import moment from 'moment';
import React, { Component, PropTypes } from 'react';
import CaseListTable from '../components/case_list/case_list_table';
import * as actions from '../action_creators';
import { getFetchCasesError, getEnteredCasesFilter, getCasesById } from '../reducers';
import CaseListFilter from './case_list_filter';

class ConnectedCaseList extends Component {
  componentDidMount() {
    const { fetchCases } = this.props;
    fetchCases();
  }

  render() {
    const { cases, error } = this.props;
    return (
      error ? <div style={{ marginLeft: '100px' }}>
        Error{error.status ? ` ${error.status} ` : ' '}
        fetching cases{error.message ? `: ${error.message}.` : '.'}
      </div> :
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
  error: PropTypes.any,
};

// mapStateToProps :: State -> { cases: [Case] }
const mapStateToProps = state => {
  const cases = getCasesById(state);
  const filter = getEnteredCasesFilter(state);
  const error = getFetchCasesError(state);
  // filter results on client if we are still waiting for api call
  return ({
    cases: Object.keys(cases)
    .map((id) => ({
      ...cases[id],
      dateCreated: moment(cases[id].dateCreated, 'x').format('DD/MM/YY'),
    }))
    .filter((caseObj) => caseObj.caseRef.startsWith(filter)),
    error,
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
