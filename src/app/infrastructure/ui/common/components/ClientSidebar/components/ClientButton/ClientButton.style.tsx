import styled from 'styled-components'
import IconStyle from '../../../Icon/Icon.style'

export const Root = styled.button`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  background-color: green;
  border: 1px solid;
`

export const Icon = styled(IconStyle.Root)`
  font-size: 3em;
`

export const Name = styled.span``

const ClientButtonStyle = {
  Root,
  Name
}

export default ClientButtonStyle
