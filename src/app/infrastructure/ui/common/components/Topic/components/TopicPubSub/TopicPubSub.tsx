import React, { useMemo } from 'react'
import { PubSubItem } from './components'
import TopicPubSubFC from './TopicPubSub.interface'
import { PubSubList, Root } from './TopicPubSub.style'

const TopicPubSub: React.FC<TopicPubSubFC> = ({ topic }) => {
  const pubsubCollection = useMemo(() => [1, 2, 3], [topic])

  return (
    <Root>
      <PubSubList>
        {pubsubCollection.map((item: any) => (
          <PubSubItem key={item.id} />
        ))}
      </PubSubList>
    </Root>
  )
}

export default TopicPubSub
