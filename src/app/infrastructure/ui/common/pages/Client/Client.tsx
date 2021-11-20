import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, Outlet } from 'react-router-dom'
import { ClientInformation } from '../../components'
import { ClientInformationContainer, Root, TopicContainer } from './Client.style'

const Client = () => {
  const { clientSlug } = useParams()

  const client = useSelector(() => {
    console.log(clientSlug)
    return null
  })

  return (
    <Root>
      <ClientInformationContainer>
        <ClientInformation client={client} />
      </ClientInformationContainer>
      <TopicContainer>
        <Outlet />
      </TopicContainer>
    </Root>
  )
}

export default Client
