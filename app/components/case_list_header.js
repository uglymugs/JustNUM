import React from 'react';
import { Table, TableHeader, TableHeaderColumn, TableRow } from 'material-ui/Table';

const CaseListHeader = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>Case Number</TableHeaderColumn>
        <TableHeaderColumn>Date Created</TableHeaderColumn>
        <TableHeaderColumn>Operation</TableHeaderColumn>
      </TableRow>
    </TableHeader>
  </Table>
);

export default CaseListHeader;
