import React from 'react'
import { Root } from './Button.style'

const Button: React.FC<{ className?: string }> = ({ children, className = '' }) => {
  return <Root className={className}>{children}</Root>
}

export default Button
