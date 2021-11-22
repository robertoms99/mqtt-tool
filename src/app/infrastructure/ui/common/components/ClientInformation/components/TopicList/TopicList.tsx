import React from 'react'
import { useParams } from 'react-router-dom'
import TopicListFC from './TopicList.interface'
import { ItemLink, Root } from './TopicList.style'

const TopicList: React.FC<TopicListFC> = ({ topics }) => {
  const { clientSlug, topicSlug = '' } = useParams()

  return (
    <Root>
      {topics.map((topic, index) => (
        <li key={topic}>
          <ItemLink
            to={`/client/${clientSlug ?? ''}/topic/${index + 1}`}
            selected={+topicSlug === index + 1}
          >
            {topic}
          </ItemLink>
        </li>
      ))}
    </Root>
  )
}

export default TopicList
