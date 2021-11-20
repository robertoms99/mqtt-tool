import React from 'react'
import { Route, Routes as Switch } from 'react-router-dom'
import { Topic } from '..'
import { Client, Home } from '../../pages'

const Routes = () => {
  return (
    <Switch>
      <Route path="client/edit/:clientSlug" element={null} />
      <Route path="/client/create" element={null} />
      <Route path="/client/:clientSlug" element={<Client />}>
        <Route path="topic/:topicSlug" element={<Topic />} />
      </Route>
      <Route path="/" element={<Home />} />
    </Switch>
  )
}

export default Routes
