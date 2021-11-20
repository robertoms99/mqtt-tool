import styled from 'styled-components'

export const Root = styled.article`
  display: flex;
  height: 100%;
  background-color: yellow;
`

export const ClientInformationContainer = styled.article`
  width: 25%;
  background-color: red;
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
