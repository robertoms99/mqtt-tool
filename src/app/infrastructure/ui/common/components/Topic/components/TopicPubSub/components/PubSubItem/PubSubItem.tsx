import React, { useMemo } from 'react'
import { PAYLOAD_TYPES, QOS_LEVELS } from '../../../../../../../../../domain/settings/contants'
import { Notification } from './components'
import {
  SubscriberLayout,
  PublisherLayout,
  Root,
  Wrapper,
  CloseButton,
  FormGroup,
  PayloadContentArea,
  PublishButton
} from './PubSubItem.style'

const Publisher = () => {
  return (
    <PublisherLayout onSubmit={(e) => e.preventDefault()}>
      <CloseButton />
      <FormGroup>
        <label htmlFor="qos-level-select">QoS Level</label>
        <select name="qos-level-select" id="qos-level-select">
          {QOS_LEVELS.map((level) => (
            <option value={level.id} key={level.id}>
              {level.id} - {level.label}
            </option>
          ))}
        </select>
      </FormGroup>
      <FormGroup>
        <label htmlFor="payload-type-select">Payload Type</label>
        <select name="payload-type-select" id="payload-type-select">
          {PAYLOAD_TYPES.map((payload) => (
            <option value={payload} key={payload}>
              {payload}
            </option>
          ))}
        </select>
      </FormGroup>
      <FormGroup $full>
        <label htmlFor="payload-textarea">Payload</label>
        <PayloadContentArea name="payload-textarea" id="payload-textarea" value="{}" />
      </FormGroup>
      <PublishButton>publish</PublishButton>
    </PublisherLayout>
  )
}

const Subscriber = () => {
  return (
    <SubscriberLayout>
      <CloseButton />
      <FormGroup $inline>
        <span>QoS Level</span>
        <span>0 - at most once</span>
      </FormGroup>
      <FormGroup>
        <span>Notifications</span>
        {[1, 2, 3, 4, 5].map((_, index) => (
          <Notification key={index} />
        ))}
      </FormGroup>
    </SubscriberLayout>
  )
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
