import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Routes } from './common/components'
import { MainLayout } from './common/layouts'
import GlobalStyles from './common/styles'
import store from './store'

const App = () => {
  return (
    <React.StrictMode>
      <GlobalStyles />
      <BrowserRouter>
        <Provider store={store}>
          <MainLayout>
            <Routes />
          </MainLayout>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default App
