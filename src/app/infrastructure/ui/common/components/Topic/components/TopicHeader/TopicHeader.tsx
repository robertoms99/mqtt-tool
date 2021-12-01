import React from 'react'
import TopicHeaderFC from './TopicHeader.interface'
import { ButtonPublisher, ButtonSubscriber, Root, TopicName } from './TopicHeader.style'

const TopicHeader: React.FC<TopicHeaderFC> = ({ topic }) => {
  return (
    <Root>
      <TopicName>/topic-name{topic}</TopicName>
      <ButtonPublisher>Add publisher</ButtonPublisher>
      <ButtonSubscriber>Add subscriber</ButtonSubscriber>
    </Root>
  )
}

export default TopicHeader
