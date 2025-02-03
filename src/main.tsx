import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/css/variables.css'
import './styles/css/animates.css'
import './styles/css/buttons.css'
import './styles/css/table.css'
import './styles/scss/main.scss'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
