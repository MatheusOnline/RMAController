import "./App.css"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './styles/GlobalStyle'
import { BrowserRouter } from "react-router-dom";



import Teste from './Teste'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <div id='page'>
          <GlobalStyle/>
          <Teste />
        </div>
    </BrowserRouter>
  </StrictMode>,
)
