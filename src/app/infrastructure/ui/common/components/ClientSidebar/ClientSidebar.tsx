import React from 'react'
import { Root } from './ClientSidebar.style'
import { ClientButton } from './components'

const CLIENT_MOCK = ['client 1', 'client 2 ']

const ClientSidebar = () => {
  return (
    <Root>
      <ul>
        {CLIENT_MOCK.map((client) => (
          <li key={client}>
            <ClientButton client={client} />
          </li>
        ))}
      </ul>
    </Root>
  )
}

export default ClientSidebar
