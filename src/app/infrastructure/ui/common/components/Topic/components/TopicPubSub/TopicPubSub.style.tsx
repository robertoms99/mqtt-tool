import styled from 'styled-components'

export const Root = styled.section`
  flex-grow: 1;
  padding: 2em 1em;
  overflow-y: auto;
  flex-shrink: 1;
  max-height: 100%;
`

export const PubSubList = styled.ul`
  min-height: 100%;
  display: grid;
  align-content: flex-start;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-gap: 1em;
`
