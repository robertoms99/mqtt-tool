import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Root = styled.div`
  height: 100%;
`

export const CreateTopicButton = styled.button`
  width: 100%;
  font-weight: 700;
  padding: 1em;
`

export const EditLink = styled(Link)`
  position: absolute;
  right: 2em;
  top: 1em;
`

export const ClientName = styled.h1`
  font-size: 1.7em;
`

export const ClientHeader = styled.header`
  padding: 1em 2em;
  position: relative;
  border: 1px solid;
`

const ClientInformationStyle = { Root }

export default ClientInformationStyle
