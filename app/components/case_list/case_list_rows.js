import React, { PropTypes } from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';

const CaseListTableRows = (props) =>
  (<div>
    {props.tableData.map((row, index) => (
      <TableRow key={index} selected={row.selected}>
        <TableRowColumn>{index}</TableRowColumn>
        <TableRowColumn>{row.name}</TableRowColumn>
        <TableRowColumn>{row.status}</TableRowColumn>
      </TableRow>
      ))}
  </div>);

CaseListTableRows.propTypes = {
  tableData: PropTypes.array,
};

module.exports = {
  CaseListTableRows,
};
