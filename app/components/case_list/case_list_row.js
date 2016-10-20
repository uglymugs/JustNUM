import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { TableRow, TableRowColumn } from 'material-ui/Table';

const CaseListRow = ({ caseId, dateCreated, operation }) =>
  <TableRow>
    <TableRowColumn>
      <Link to={`/cases/edit/${caseId}`}>
        {caseId}
      </Link>
    </TableRowColumn>
    <TableRowColumn>{dateCreated || ''}</TableRowColumn>
    <TableRowColumn>{operation || ''}</TableRowColumn>
  </TableRow>;

CaseListRow.propTypes = {
  caseId: PropTypes.string.isRequired,
  dateCreated: PropTypes.any,
  operation: PropTypes.any,
  // name: PropTypes.string.isRequired,
  // status: PropTypes.string.isRequired,
};

export default CaseListRow;
