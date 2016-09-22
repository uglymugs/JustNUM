import React, { PropTypes } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow } from 'material-ui/Table';
import CaseListRow from './case_list_row';

const CaseListTable = ({ cases }) =>
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>Case Id</TableHeaderColumn>
        <TableHeaderColumn>Date Created</TableHeaderColumn>
        <TableHeaderColumn>Operation</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      {cases.map((c, idx) => <CaseListRow key={idx} {...c} />)}
    </TableBody>
  </Table>;

CaseListTable.propTypes = {
  cases: PropTypes.array.isRequired,
};

export default CaseListTable;
