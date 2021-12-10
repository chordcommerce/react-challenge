import React from 'react'
import { Provider } from 'react-redux'
import DataTable from './components/DataTable'
import DataVisualization from './components/DataVisualization'
import { useData } from './hooks'
import store from './state/store'

const App = () => {
  const data = useData()

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
