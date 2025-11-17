import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './styles/GlobalStyle'
import "./App.css"
import Teste from './Teste'
import MainNavBar from './components/NavBar/mainNavBar'
import Header from './components/header/header'
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <div id='page'>
        <GlobalStyle/>
        <Header/>
        <div id='content'>
          <MainNavBar/>
          <div id='routers'>
            <Teste />
          </div>
        </div>
        
      </div>
    </BrowserRouter>
  </StrictMode>,
)
