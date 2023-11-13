import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Deslizante from "../../deslizante";
import styled from "styled-components";
import couserlog from "../../img/coursera.png";

const CetLinkstyle = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-top: 5px;
  
`;

const IconsCet = styled.div`
  background: url(${couserlog}) no-repeat center;
  background-size: 30px auto;
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

export const CetLink = () => {
  const [showParagraph, setShowParagraph] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowParagraph(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Deslizante direction="left">
      {showParagraph ? (
        
        <CetLinkstyle to={"/coursera"}>
          <IconsCet />
          Cousera
        </CetLinkstyle>
      
      ) : null}
    </Deslizante>
  );
};
