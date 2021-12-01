import styled from 'styled-components'

export const Root = styled.article`
  border: 1px solid;
  padding-top: 70%;
  position: relative;
`

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1em;
`

export const FormGroup = styled.div``

export const PublisherLayout = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  label {
    display: block;
  }
`

export const SubscriberLayout = styled.div``
