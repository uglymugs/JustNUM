import React, { PropTypes } from 'react';

const caseListStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: 'white',
  height: '100%',
  width: '100%',
};

const CaseList = ({ styles }) =>
  <div style={Object.assign({}, caseListStyles, styles)}>
    Case List
  </div>;

CaseList.propTypes = {
  styles: PropTypes.object,
};

export default CaseList;
