import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import * as actions from '../action_creators';

const Filter = ({ changeHandler }) => {
  const boundChangeHandler = (e) => {
    changeHandler(e.target.value);
  };
  changeHandler('');
  return (
    <TextField
      hintText="Case ID"
      floatingLabelText="Filter"
      onChange={boundChangeHandler}
    />
  );
};

Filter.propTypes = {
  changeHandler: PropTypes.func.isRequired,
};

const CaseListFilter = connect(null, { changeHandler: actions.updateEnteredCasesFilter })(Filter);

export default CaseListFilter;
