import React from 'react'
import { Name, Root } from './ClientButton.style'
import { faServer } from '@fortawesome/free-solid-svg-icons'
import { Icon } from '../../../'
import ClientButtonFC from './ClientButton.interface'

const ClientButton: React.FC<ClientButtonFC> = ({ client }) => {
  return (
    <Root to="/client/1">
      <Icon icon={faServer} />
      <Name>{client}</Name>
    </Root>
  )
}

export default ClientButton
