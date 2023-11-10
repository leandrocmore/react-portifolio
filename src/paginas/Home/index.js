 
import { useEffect, useState } from 'react';
import Deslizante from '../deslizante';
import styled from 'styled-components';

const Container = styled.section`
margin-top: 60px;
padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Pbiografi = styled.p`
line-height: 1.6;
color: white; 
font-size: 25px;
text-align: center;
@media (max-width: 700px) {
  font-size: 15px; 
  text-align: center;
}

`;
const H1biograf = styled.h1`
font-size: 40px;
color: white;
@media (max-width: 700px) {
  font-size: 20px;
  text-align: center; 
}
`;
const Alink = styled.a`
border-bottom: 1px solid white;
color: white; 
  text-decoration: none; 
  transition: color 0.2s; 

  &:hover {
    color: #C44848; 
  }
`;

const Separator = styled.hr`
width: 80%;
  height: 0px;
  border: 1px solid white; 
  margin: 10px 0; 
`;


const Home = () => {
  const [showParagraph, setShowParagraph] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowParagraph(true);
    }, 1000);

    // Limpeza do useEffect. Cancela o timer se o componente for desmontado.
    return () => clearTimeout(timer);
  }, []);

    return (
      
<Deslizante direction="top" >
{showParagraph ? <Container>
<H1biograf>Ola sou <br/> Leandro Camargo Moré <br/> e  <br/>
Seja bem-vindo ao meu portfólio</H1biograf>
<Separator/>
<Pbiografi>Uma trajetória de reinvenção e paixão pelo aprendizado
  . Iniciando sua carreira nos canteiros de obras com seu pai, 
  Leandro expandiu suas habilidades com formações técnicas pelo SENAI, 
  chegando a construir um trator perfuratriz. Não se limitando, 
  ele mergulhou no mundo da tecnologia, Bacharelado Engenharia da Computação Universidade <Alink href='https://univesp.br/'> Univesp </Alink> e explorando programação 
  através da  <Alink href='https://www.freecodecamp.org/learn'> freeCodeCamp </Alink> 
  , <Alink href='https://www.dio.me/'>Dio</Alink>
   , <Alink href='https://www.coursera.org/'> Cousera</Alink>
  , <Alink href='https://workover.com.br/'> Workover  </Alink>  . Sua jornada, 
  refletida em seu portfólio no <Alink href='https://github.com/leandrocmore'> GitHub</Alink> , é um testemunho de seu comprometimento 
  contínuo com o crescimento e inovação.

</Pbiografi>

</Container>: null}
</Deslizante> 
         
    );
}

export default Home;