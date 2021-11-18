import React from 'react'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

const Icon: React.FC<FontAwesomeIconProps> = ({ icon }) => {
  return <FontAwesomeIcon icon={icon} />
}

export default Icon
