
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaWhatsapp, FaEnvelope, FaFacebook,FaLinkedin,FaGithub } from 'react-icons/fa';
import Deslizante from "../deslizante";

const Alink = styled.a`
margin-left: 15px; 
border-bottom: 1px solid white;
color: white; 
  text-decoration: none; 
  transition: color 0.2s; 

  &:hover {
    color: #C44848; 
  }
`;
const Contatospai = styled.section`
width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContatoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin: 10px;
`;
const Icon = styled.span`
margin-left: 30px;
padding-right: 20px;
display: flex;
  font-size: 20px;
  margin-right: 30px; 
`;

const Separator = styled.hr`
width: 80%;
  height: 0px;
  border: 1px solid white; 
  margin: 10px 0; 
`;


 export const Contatos = () => {
    const [showParagraph, setShowParagraph] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowParagraph(true);
      }, 1000);
  
      // Limpeza do useEffect. Cancela o timer se o componente for desmontado.
      return () => clearTimeout(timer);
    }, []);
  
      return(
<Deslizante direction="down">{showParagraph ? 


<Contatospai>
            
            <ContatoItem>
              <Icon><FaWhatsapp  size={30}/>

              <Alink href="https://wa.me/55015996982622" >WhatsApp ( 015-996982622 ) </Alink>

              </Icon>

              <Icon>
                <FaEnvelope size={30}/>
                
                <Alink href="mailto:leandrocmore@gmail.com">leandrocmore@gmail.com</Alink>

                </Icon>
            </ContatoItem>

            <Separator/>

            <ContatoItem>
                <Icon>
                  <FaLinkedin size={30} />
                  <Alink href="https://www.linkedin.com/in/leandro-more" >Linkedin </Alink>
                </Icon>

                <Icon>
                  <FaFacebook/><Alink href="https://www.facebook.com/profile.php?id=100077847608243" >Facebook</Alink>
                </Icon>
                <Icon>
                  <FaGithub size={30}/><Alink href="https://github.com/leandrocmore">Guithub</Alink>
                </Icon>

              
            </ContatoItem>
  </Contatospai>
  : null}
</Deslizante>

      );
 } 