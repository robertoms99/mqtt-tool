import React from 'react'
import Style from './MainLayout.styles'

const MainLayout: React.FC = ({ children }) => {
  return <Style.Root>{children}</Style.Root>
}

export default MainLayout
