import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 20px 0px;
  background-color: white;
  min-height: 200px;
  width: 100%;
`

const DataVisualization = () => (
  <Container>
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Toicon-icon-lines-and-angles-chart.svg/480px-Toicon-icon-lines-and-angles-chart.svg.png"
      alt="placeholder chart"
      width={100}
    />
  </Container>
)

export default DataVisualization
