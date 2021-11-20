import { faPen, faPlus } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Icon } from '..'
import ClientInformationFC from './ClientInformation.interface'
import { Root } from './ClientInformation.style'

const ClientInformation: React.FC<ClientInformationFC> = ({ client }) => {
  const { clientSlug } = useParams()

  return (
    <Root>
      <header>
        <Link to={`/client/edit/1`}>
          <Icon icon={faPen} />
        </Link>
        <h1>CLIENT {client}</h1>
        <span> mqtt://localhost:8080</span>
      </header>
      <section>
        <button>
          topics <Icon icon={faPlus} />
        </button>
        <ul>
          <li>
            <Link to={`/client/${clientSlug ?? ''}/topic/1`}>messages</Link>
          </li>
          <li>
            <Link to={`/client/${clientSlug ?? ''}/topic/2`}>users</Link>
          </li>
        </ul>
      </section>
    </Root>
  )
}

export default ClientInformation
