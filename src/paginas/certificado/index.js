import React, { useEffect, useState } from "react";
import Deslizante from "../deslizante";
import styled from "styled-components";
import { CetLink } from "./cetiLink";

const Conteinerpai = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  `;

  const ContFilho = styled.div`

  width: 90%;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 
  `;
const CotLinkpai = styled.div`
width: 150px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 700px) {
    align-items: stretch;
    width: 45%;
  }
`;
const PcetPai = styled.h3`
text-align: center;
color: white;
margin-left: 20px;
margin-right: 20px;

`;


export const Certificado = () => {
  const [showParagraph, setShowParagraph] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowParagraph(true);
    }, 1000);

    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Deslizante direction="right">
      {showParagraph ? (

        
        <Conteinerpai>
<PcetPai>Sempre busco<br/> novos conceitos e formas<br/> 
  inovadoras de simplificar o
   que já é conhecido. </PcetPai>
         <ContFilho>

          <CotLinkpai>
          <CetLink />
          </CotLinkpai>

          </ContFilho>


        </Conteinerpai>
      ) : null}
    </Deslizante>
  );
};
