import styled from 'styled-components'

export const Root = styled.main`
  min-width: 112rem;
  height: 100vh;
  display: flex;
`

export const Container = styled.section`
  flex-grow: 1;
  flex-shrink: 0;
  border-left: 1px solid;
`

const MainLayoutStyles = {
  Root,
  Container
}

export default MainLayoutStyles
