import styled from 'styled-components'

export const Root = styled.article`
  display: flex;
  height: 100%;
`

export const ClientInformationContainer = styled.article`
  width: 25%;
`

export const TopicContainer = styled.article`
  flex-grow: 1;
`

const ClientStyle = {
  Root,
  ClientInformationContainer,
  TopicContainer
}

export default ClientStyle
