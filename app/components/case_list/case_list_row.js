import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { TableRow, TableRowColumn } from 'material-ui/Table';

const CaseListRow = ({ caseId, createdDate, operation }) =>
  <TableRow>
    <TableRowColumn>
      <Link to={`/cases/edit/${caseId}`}>
      {caseId}
      </Link>
    </TableRowColumn>
    <TableRowColumn>{createdDate || ''}</TableRowColumn>
    <TableRowColumn>{operation || ''}</TableRowColumn>
  </TableRow>;

CaseListRow.propTypes = {
  caseId: PropTypes.string.isRequired,
  createdDate: PropTypes.any,
  operation: PropTypes.any,
  // name: PropTypes.string.isRequired,
  // status: PropTypes.string.isRequired,
};

export default CaseListRow;
