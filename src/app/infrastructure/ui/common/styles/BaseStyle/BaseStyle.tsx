import { createGlobalStyle } from 'styled-components'

const BaseStyle = createGlobalStyle`
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  -webkit-tap-highlight-color: transparent !important;
}
html {
  font-size: 62.5%;
}
html,
body,
#root {
  min-height: 100vh;
}
body {
  box-sizing: border-box;
  overflow: auto;
}
p {
  line-height: 1.5;
}
ul {
  list-style-type: none
}
a {
  color: inherit;
  text-decoration: none;
}
textarea {
  resize: none;
}
button,
input,
select,
textarea {
  outline: none;
  border: none;
  background: none;
  font-family: inherit;
  color: inherit;
  font-size: 100%;
}
`

export default BaseStyle
