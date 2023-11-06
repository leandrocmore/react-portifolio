
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import Deslizante from "../deslizante";


const Contatospai = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

const ContatoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin: 10px;
`;
const Icon = styled.span`
  font-size: 24px; /* Tamanho do ícone */
  margin-right: 10px; /* Espaçamento entre o ícone e o texto */
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
              <Icon><FaWhatsapp /></Icon>
              <a href="https://wa.me/seu-numero-de-telefone">WhatsApp</a>
            </ContatoItem>
            <ContatoItem>
              <Icon><FaEnvelope /></Icon>
              <a href="mailto:email@example.com">email@example.com</a>
            </ContatoItem>
  </Contatospai>
  : null}
</Deslizante>

      );
 } 