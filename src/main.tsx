import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./App.css"
import Teste from './Teste'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Teste />
  </StrictMode>,
)
