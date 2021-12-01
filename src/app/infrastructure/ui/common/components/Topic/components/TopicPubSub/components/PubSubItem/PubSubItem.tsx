import React, { useMemo } from 'react'
import { PAYLOAD_TYPES, QOS_LEVELS } from '../../../../../../../../../domain/settings/contants'
import { SubscriberLayout, PublisherLayout, Root, Wrapper, FormGroup } from './PubSubItem.style'

const Publisher = () => {
  return (
    <PublisherLayout onSubmit={(e) => e.preventDefault()}>
      <FormGroup>
        <label htmlFor="">QoS Level</label>
        <select name="" id="">
          {QOS_LEVELS.map((level) => (
            <option value={level.id} key={level.id}>
              {level.id} - {level.label}
            </option>
          ))}
        </select>
      </FormGroup>
      <FormGroup>
        <label htmlFor="">Payload Type</label>
        <select name="" id="">
          {PAYLOAD_TYPES.map((payload) => (
            <option value={payload} key={payload}>
              {payload}
            </option>
          ))}
        </select>
      </FormGroup>
    </PublisherLayout>
  )
}

const Subscriber = () => {
  return <SubscriberLayout>subscriber</SubscriberLayout>
}

const PubSubItem = () => {
  const isPub = useMemo(() => true, [])
  const ItemContent = isPub ? Publisher : Subscriber

  return (
    <Root>
      <Wrapper>
        <ItemContent />
      </Wrapper>
    </Root>
  )
}

export default PubSubItem
