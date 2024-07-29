import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Landing from './screens/landing'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App name="React App" /> */}
    <App />
    <Landing />
  </React.StrictMode>,
)
