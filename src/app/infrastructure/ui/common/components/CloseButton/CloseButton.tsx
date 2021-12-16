import React from 'react'
import { Root } from './CloseButton.style'

const CloseButton: React.FC<{ className?: string }> = ({ className = '' }) => {
  return <Root className={className}>x</Root>
}

export default CloseButton
