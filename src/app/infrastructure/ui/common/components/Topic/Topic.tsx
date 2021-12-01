import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { TopicHeader, TopicPubSub } from './components'
import { Root } from './Topic.style'

const Topic = () => {
  const { topicSlug } = useParams()
  const topic = useMemo(() => topicSlug, [topicSlug])

  return (
    <Root>
      <TopicHeader topic={topic} />
      <TopicPubSub topic={topic} />
    </Root>
  )
}

export default Topic
