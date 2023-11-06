
import React from "react";
import { useEffect, useState } from "react";
import Deslizante from "../deslizante";

export const Certificado = () => {
    const [showParagraph, setShowParagraph] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setShowParagraph(true);
      }, 1000);
  
      // Limpeza do useEffect. Cancela o timer se o componente for desmontado.
      return () => clearTimeout(timer);
    }, []);
  
      return (
        
  <Deslizante direction="right"  >
  {showParagraph ? <>
  
  
  <h1>Certificado</h1>
  
  
  
  </>: null}
  </Deslizante> 
           
      );
  }
  
