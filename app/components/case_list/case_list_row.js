import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { TableRow, TableRowColumn } from 'material-ui/Table';

const CaseListRow = ({ caseCaseId, caseCreatedDate, caseOperation }) =>
  <TableRow>
    <TableRowColumn>
      <Link to={`/cases/edit/${caseCaseId}`}>
        {caseCaseId}
      </Link>
    </TableRowColumn>
    <TableRowColumn>{caseCreatedDate || ''}</TableRowColumn>
    <TableRowColumn>{caseOperation || ''}</TableRowColumn>
  </TableRow>;

CaseListRow.propTypes = {
  caseCaseId: PropTypes.string.isRequired,
  caseCreatedDate: PropTypes.any,
  caseOperation: PropTypes.any,
  // name: PropTypes.string.isRequired,
  // status: PropTypes.string.isRequired,
};

export default CaseListRow;
