import React from 'react'
import { render } from 'react-dom'

import App from './app/infrastructure/ui/App'

const rootNode = document.getElementById('root') ?? document.createElement('div')

if (!document.body.contains(rootNode)) {
  rootNode.id = 'root'
  document.body.appendChild(rootNode)
}

render(<App />, rootNode)

// coment
