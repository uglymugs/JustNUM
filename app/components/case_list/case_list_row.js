import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { TableRow, TableRowColumn } from 'material-ui/Table';

const CaseListRow = ({ caseRef, dateCreated, operation }) =>
  <TableRow>
    <TableRowColumn>
      <Link to={`/authenticated/cases/edit/${caseRef}`}>
        {caseRef}
      </Link>
    </TableRowColumn>
    <TableRowColumn>{dateCreated || ''}</TableRowColumn>
    <TableRowColumn>{operation || ''}</TableRowColumn>
  </TableRow>;

CaseListRow.propTypes = {
  caseRef: PropTypes.string.isRequired,
  dateCreated: PropTypes.any,
  operation: PropTypes.any,
};

export default CaseListRow;
