import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from "../src/paginas/sidebar/index.js";
import About from '../src/paginas/about/index';
import Home from "./paginas/Home";
import styled from "styled-components";
import meuLogoUrl from '../src/paginas/img/nome-icone.png';
import { Contatos } from './paginas/contatos/index.js';
import { Certificado } from './paginas/certificado/index.js';
import { Coursera } from './paginas/certificado/coursera/index.js';


const StylespaPagina = styled.div`

  margin: 0;
  padding: 0;
  box-sizing: border-box;
background: url(${meuLogoUrl}) no-repeat center;
background-size: 600px auto;

    display: flex;
  
    flex-direction: column;
    align-items: center;
    justify-content: center; 
     width: 100%;    
    height: 100vh;   
    position: fixed; 
    top: 0;           
    left: 0; 
    border-radius: 10px;      
background-color: #23293e;
text-align: center;
margin: 0 auto; // Centraliza o conteúdo horizontalmente
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
-webkit-font-smoothing: antialiased;


@media (max-width: 1200px) {

    padding: 0vh;
    background-size: 70%
    
}


@media (max-width: 992px) { 
  
    padding: 0;
    background-size: 70%
}


@media (max-width: 768px) {

  padding: 0;
    background-size: 70%
    height: 100vh; 
}
`;

function App() {
 

  return (<>
 
  <StylespaPagina >
  <Router>
  
          <Sidebar/>

          <Routes>
            <Route exact path="/portifolio" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path='/certificado' element={<Certificado />}/>
            <Route path='/contatos' element={<Contatos/>}/>
            <Route path='/coursera' element={<Coursera/>}/>
          </Routes>
        </Router>
  </StylespaPagina>
      </>
  );
}

export default App;
