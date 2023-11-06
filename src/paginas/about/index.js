
import { useEffect, useState } from "react";
import Deslizante from "../deslizante";

const About = () => {
    const [showParagraph, setShowParagraph] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setShowParagraph(true);
      },800);
  
      // Limpeza do useEffect. Cancela o timer se o componente for desmontado.
      return () => clearTimeout(timer);
    }, []);
  
      return (
        
  <Deslizante direction="left"  >
  {showParagraph ? <>
  
  
  <h1>more</h1>
  
  
  
  </>: null}
  </Deslizante> 
           
      );
  }
  
  export default About;