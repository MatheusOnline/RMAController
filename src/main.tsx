import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./App.css"
import Teste from './Teste'
import Header from './components/header/header'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header/>
      <Teste />
  </StrictMode>,
)
