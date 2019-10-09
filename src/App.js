import React from 'react'
import { Provider } from 'react-redux'
import DataTable from './containers/DataTable'
import DataVisualization from './containers/DataVisualization'
import { getData } from './hooks'
import store from './state/store'

const App = () => {
  const data = getData()

  return (
    <Provider store={store}>
      <div className="app">
        <DataVisualization />
        <DataTable data={data} />
      </div>
    </Provider>
  )
}

export default App
