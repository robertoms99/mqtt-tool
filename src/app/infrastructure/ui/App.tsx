import React from 'react'
import { Provider } from 'react-redux'
import Routes from './common/components/Routes'
import MainLayout from './common/layouts/MainLayout'
import GlobalStyles from './common/styles'
import store from './store'

const App = () => {
  return (
    <React.StrictMode>
      <GlobalStyles />
      <Provider store={store}>
        <MainLayout>
          <Routes />
        </MainLayout>
      </Provider>
    </React.StrictMode>
  )
}

export default App
