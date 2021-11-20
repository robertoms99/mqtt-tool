import React from 'react'
import { useParams } from 'react-router-dom'

const Topic = () => {
  const { topicSlug } = useParams()
  return <section>topic {topicSlug}</section>
}

export default Topic
