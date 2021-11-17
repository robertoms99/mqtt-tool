import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
:root {
  --color-black: #40424f;
  --color-dark-black: #222224;
  --color-dark-transparent-black: #222224ea;
  --color-darkest-black: #1b1b1d;
  --color-grey: #888888;
  --color-light-grey: #f5f5f5;
  --color-white: white;
  --color-transparent-white: rgba(255, 255, 255, 0.911);
  --color-primary: #5828e8;
  --color-lightest-primary: #ebe2fd;
  --color-dark-primary: #421FAA;
  --color-darkest-primary: #16076F;
  --font-family-primary: 'Rubik', sans-serif;
  --initial-font-size: 1.5rem;
  --color-section-background: var(--color-white);
}
body {
  color: var(--color-black);
  font-family: var(--font-family-primary);
  font-size: var(--initial-font-size);
  background-color: var(--color-section-background);
}
body.dark {
  color: white;
  --color-light-grey: var(--color-dark-black);
  --color-white: var(--color-dark-black);
  --color-section-background: var(--color-darkest-black);
  --color-lightest-primary: var(--color-darkest-black);
  --color-transparent-white: var(--color-dark-transparent-black);
}
html,
body {
  scroll-behavior: smooth;
}
`

export default GlobalStyle
