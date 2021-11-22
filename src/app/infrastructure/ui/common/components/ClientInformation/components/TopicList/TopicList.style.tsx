import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const Root = styled.ul`
  border: 1px solid;
  li {
    border: 1px solid;
  }
`

export const ItemLink = styled(Link)<{ selected: boolean }>`
  padding: 1em 2em;
  display: block;
  border-left: 3px solid transparent;
  ${({ selected }) =>
    selected &&
    css`
      border-left-color: green;
    `}
`

const TopicListStyle = { Root }

export default TopicListStyle
