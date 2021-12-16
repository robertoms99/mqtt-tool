import styled, { css } from 'styled-components'
import Button from '../../../../../Button'
import CloseButtonBase from '../../../../../CloseButton'

export const Root = styled.article`
  border: 1px solid;
  padding-top: 70%;
  position: relative;
`

export const PayloadContentArea = styled.textarea`
  border: 1px solid;
  width: 100%;
  flex: 1;
`

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1em;
`

export const FormGroup = styled.div<{ $full?: boolean; $inline?: boolean }>`
  display: flex;
  ${({ $inline = false }) =>
    !$inline &&
    css`
      flex-direction: column;
    `}
  ${({ $full = false }) =>
    $full &&
    css`
      grid-column: 1 / -1;
    `}
`

export const PublisherLayout = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto 1fr auto;
  height: 100%;
  label {
    display: block;
  }
`

export const PublishButton = styled(Button)`
  margin-top: 1em;
  justify-self: flex-end;
  grid-column: -2;
`

export const SubscriberLayout = styled.article``

export const CloseButton = styled(CloseButtonBase)`
  --offset: 0.3em;
  position: absolute;
  right: var(--offset);
  top: var(--offset);
`
