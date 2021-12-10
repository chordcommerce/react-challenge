import styled from 'styled-components'

export const Table = styled.div`
  display: flex;
  flex-direction: column;
`

export const TableRow = styled.div`
  display: flex;

  div {
    flex: 1;
    background-color: white;
    padding: 5px 10px;
    margin: 1px;
  }
`

export const HeaderRow = styled(TableRow)`
  div {
    background-color: #007e7f;
    font-weight: bold;
    color: white;
    border: none;
  }
`
