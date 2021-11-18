import React from 'react'
import { Name, Root } from './ClientButton.style'
import { faServer } from '@fortawesome/free-solid-svg-icons'
import { Icon } from '../../../'

const ClientButton: React.FC = ({ children }) => {
  return (
    <Root>
      <Icon icon={faServer} />
      <Name>{children}</Name>
    </Root>
  )
}

export default ClientButton
