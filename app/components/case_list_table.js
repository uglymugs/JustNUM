import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow } from 'material-ui/Table';

const CaseListTable = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>Case Number</TableHeaderColumn>
        <TableHeaderColumn>Date Created</TableHeaderColumn>
        <TableHeaderColumn>Operation</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody />
  </Table>
);

export default CaseListTable;
