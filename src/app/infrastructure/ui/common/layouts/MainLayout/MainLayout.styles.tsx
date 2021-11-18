import styled from 'styled-components'

export const Root = styled.main`
  min-width: 112rem;
  height: 100vh;
  display: flex;
`

export const Container = styled.section`
  background-color: red;
  flex-grow: 1;
  flex-shrink: 0;
`

const MainLayoutStyles = {
  Root,
  Container
}

export default MainLayoutStyles
