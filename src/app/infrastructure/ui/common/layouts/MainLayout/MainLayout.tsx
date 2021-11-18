import React from 'react'
import { ClientSidebar } from '../../components'
import { Root, Container } from './MainLayout.styles'

const MainLayout: React.FC = ({ children }) => {
  return (
    <Root>
      <ClientSidebar />
      <Container>{children}</Container>
    </Root>
  )
}

export default MainLayout
