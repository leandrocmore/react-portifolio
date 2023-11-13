import React, { useEffect, useState } from "react";
import Deslizante from "../../deslizante";
import styled from "styled-components";
import { FaHome } from 'react-icons/fa';
import { Link } from "react-router-dom";
import Certificado1 from "../../img/coursera/Coursera_UX_1.png";
import Certificado2 from "../../img/coursera/Coursera_UX_2.png";
import Certificado3 from "../../img/coursera/Coursera_UX_3.png";
import Certificado4 from "../../img/coursera/Coursera_UX_4.png";

const Conteinerpai = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 700px) {
    align-items: center; 
  }
`;


const LinkHome = styled(Link)`
margin-top: 5px; 
color: white;
  display: flex;
  align-items: center;
  font-size: 20px; 
`;

const IconeHome = styled(FaHome)`
  margin: 3px;
  color: white;
  width: 40px; 
  height: 25px; 
`;



const Centrealiza = styled.div`
display: flex;
  flex-direction: column;
 
`;
const Cetipng1 = styled.div`
background: url(${Certificado1}) no-repeat center;
background-size: 700px auto;
margin-top: 5px; 
width: 700px; 
height: 550px;
@media (max-width: 700px) {
  background-size: 300px auto;
  width: 300px; 
height: 240px;
} 
`;
const Cetipng2 = styled.div`
background: url(${Certificado2}) no-repeat center;
background-size: 700px auto;
margin-top: 5px; 
width: 700px; 
height: 550px;
@media (max-width: 700px) {
  background-size: 300px auto;
  width: 300px; 
height: 240px;
} 
`;
const Cetipng3= styled.div`
background: url(${Certificado3}) no-repeat center;
background-size: 700px auto;
margin-top: 5px; 
width: 700px; 
height: 550px;
@media (max-width: 700px) {
  background-size: 300px auto;
  width: 300px; 
height: 240px;
} 
`;
const Cetipng4 = styled.div`
background: url(${Certificado4}) no-repeat center;
background-size: 700px auto;
margin-top: 5px; 
width: 700px; 
height: 550px;
@media (max-width: 700px) {
  background-size: 300px auto;
  width: 300px; 
height: 240px;
} 
`;

export const Coursera = () => {
  const [showParagraph, setShowParagraph] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowParagraph(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Deslizante direction="top">
      {showParagraph ? (
        <Centrealiza>
        <Conteinerpai>
          <LinkHome to={"/certificado"}>
            <IconeHome />
            Home
          </LinkHome>

            <Cetipng1/>
            <Cetipng2/>
            <Cetipng3/>
            <Cetipng4/>
        </Conteinerpai>
        </Centrealiza>
      ) : null}
    </Deslizante>
  );
};
