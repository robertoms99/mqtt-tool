import styled from 'styled-components'

export const Root = styled.header`
  display: flex;
  align-items: center;
  padding: 1.5em;
  border-bottom: 1px solid;
`

export const ButtonAction = styled.button`
  padding: 1em 2em;
  border-radius: 0.5rem;
  :not(:last-child) {
    margin-right: 1.5em;
  }
`

export const ButtonSubscriber = styled(ButtonAction)`
  background-color: blue;
`

export const ButtonPublisher = styled(ButtonAction)`
  background-color: orange;
`

export const TopicName = styled.h3`
  margin-right: 10rem;
`

const TopicHeaderStyle = { Root, TopicName, ButtonSubscriber, ButtonPublisher }

export default TopicHeaderStyle
