import React, { PropTypes } from 'react';
import CaseForm from './case_form';

const caseViewStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: 'white',
  height: '100%',
  width: '100%',
};

const CaseView = ({ styles, params: { caseId } }) =>
  <div style={Object.assign({}, caseViewStyles, styles)}>
    <CaseForm caseId={caseId} />
    {/* {caseId
      ? `Showing Case: ${caseId}`
      : 'New Case'} */}
  </div>;

CaseView.propTypes = {
  styles: PropTypes.object,
  params: PropTypes.object.isRequired,
};

export default CaseView;
