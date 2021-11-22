import { faPen, faPlus } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { useParams } from 'react-router-dom'
import { Icon } from '..'
import ClientInformationFC from './ClientInformation.interface'
import {
  Root,
  ClientHeader,
  ClientName,
  EditLink,
  CreateTopicButton
} from './ClientInformation.style'
import TopicList from './components/TopicList'

const ClientInformation: React.FC<ClientInformationFC> = ({ client }) => {
  const { clientSlug } = useParams()
  console.log(clientSlug)

  return (
    <Root>
      <ClientHeader>
        <EditLink to={`/client/edit/1`}>
          <Icon icon={faPen} />
        </EditLink>
        <ClientName>CLIENT {client}</ClientName>
        <em> mqtt://localhost:8080</em>
      </ClientHeader>
      <section>
        <CreateTopicButton>
          TOPICS <Icon icon={faPlus} />
        </CreateTopicButton>
        <TopicList topics={['messages', 'users']} />
      </section>
    </Root>
  )
}

export default ClientInformation
