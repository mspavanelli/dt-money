import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import server from './mocks/server'

server()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
