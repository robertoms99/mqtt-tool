import { Home } from '../../pages'
import React from 'react'
import { Route, Routes as Switch } from 'react-router-dom'

const Routes = () => {
  return (
    <Switch>
      <Route path="/client/create" element={null} />
      <Route path="/client/:slug" element={<Home />} />
      <Route path="/" element={<Home />} />
    </Switch>
  )
}

export default Routes
