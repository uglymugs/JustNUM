import React, { PropTypes } from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';

const CaseListRow = ({ caseId, createdDate, operation }) =>
  <TableRow>
    <TableRowColumn>x</TableRowColumn>
    <TableRowColumn>{caseId}</TableRowColumn>
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
