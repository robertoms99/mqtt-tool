import React from 'react'
import { NotificationTime, Root } from './Notification.style'

const Notification = () => {
  return (
    <Root>
      payload:
      <NotificationTime>
        <em> a few ago</em>
      </NotificationTime>
    </Root>
  )
}

export default Notification
