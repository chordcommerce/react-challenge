import React from 'react'
import { Table, HeaderRow, TableRow } from '../components/Table'

const DataTable = props => (
  <Table>
    <HeaderRow>
      <div>Date</div>
      <div>Value</div>
    </HeaderRow>
    {props.data.map(d => (
      <TableRow key={d[0]}>
        <div>{d[0]}</div>
        <div>{d[1]}</div>
      </TableRow>
    ))}
  </Table>
)

export default DataTable
