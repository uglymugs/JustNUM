import React, { PropTypes } from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';

const CaseListRow = ({ id, name, status }) =>
  <TableRow>
    <TableRowColumn>x</TableRowColumn>
    <TableRowColumn>{id}</TableRowColumn>
    <TableRowColumn>{name}</TableRowColumn>
    <TableRowColumn>{status}</TableRowColumn>
  </TableRow>;

CaseListRow.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default CaseListRow;
