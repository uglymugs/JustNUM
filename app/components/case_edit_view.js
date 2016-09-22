import React, { PropTypes } from 'react';
import CaseEditForm from './case_form/case_edit_form';

const CaseEditView = ({ params: { caseId }, cases }) => {
  const crntCase = cases.find(c => c.caseCaseId === caseId);
  return <CaseEditForm initialValues={crntCase} />;
};

CaseEditView.propTypes = {
  params: PropTypes.object.isRequired,
  cases: PropTypes.array.isRequired,
};

export default CaseEditView;
