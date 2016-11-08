import React, { PropTypes } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow } from 'material-ui/Table';
import CaseListRow from './case_list_row';

const CaseListTable = ({ cases }) =>
  <Table selectable={false}>
    <TableHeader displaySelectAll={false}>
      <TableRow>
        <TableHeaderColumn>Case ID</TableHeaderColumn>
        <TableHeaderColumn>Date Created</TableHeaderColumn>
        <TableHeaderColumn>Operation</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      {cases.map((c) => <CaseListRow key={c.id} {...c} />)}
    </TableBody>
  </Table>;

CaseListTable.propTypes = {
  cases: PropTypes.array.isRequired,
};

export default CaseListTable;
