import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MeditationProvider } from './context/MeditationContext'
import { HashRouter } from 'react-router-dom'
// Importazione del favicon
import './assets/icons/medifavicon.png'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <MeditationProvider>
        <App />
      </MeditationProvider>
    </HashRouter>
  </React.StrictMode>,
)
