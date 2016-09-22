import React, { PropTypes } from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';

const CaseListRow = ({ caseId }) =>
  <TableRow>
    <TableRowColumn>x</TableRowColumn>
    <TableRowColumn>{caseId}</TableRowColumn>
    <TableRowColumn>tbd</TableRowColumn>
    <TableRowColumn>tbd</TableRowColumn>
  </TableRow>;

CaseListRow.propTypes = {
  caseId: PropTypes.string.isRequired,
  // name: PropTypes.string.isRequired,
  // status: PropTypes.string.isRequired,
};

export default CaseListRow;
