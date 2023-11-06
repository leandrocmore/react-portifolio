import React, { useEffect, useRef, useState } from 'react';

import styled from 'styled-components';


const SlideDiv = styled.div`

  overflow-y: auto; 
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  height: 80%; 
  width: 87.5%;
  background-color: rgba(24, 29, 43, 0.5); 
  border-radius: 10px;  /* Bordas arredondadas */
  border: 1px solid rgba(255, 255, 255, 0.18);
  transform: ${props => {
    if (props.direction === 'top'  ) {
        return 'translateY(' + (props.open ? '0' : '-100vh') + ')';
    }
    if (props.direction === 'left') {
        return 'translateX(' + (props.open ? '0' : '-100vw') + ')';
    }
    if (props.direction === 'down') {
      return 'translateY(' + (props.open ? '0' : '+100vh') + ')';
    }
    if (props.direction === 'right') {
      return 'translateX(' + (props.open ? '0' : '+100vw') + ')';
    }
  
    return 'translate(0, 0)';
  }};
  transition: 0.6s ease;
`;

const Deslizante = ({ direction, open2 , children}) => {
  const [open, setOpen] = useState(open2);
  const prevDirectionRef = useRef(direction);

  useEffect(() => {
    // Se a direção anterior era 'top' e a atual é 'left'
    if (prevDirectionRef.current === 'top'  || direction === 'left' || direction === 'down' ||  direction === 'right' ) {
      setOpen(true);
      const timer = setTimeout(() => {
        setOpen(null); // ou setOpen(false) se você deseja usar um valor booleano
      }, 800);
    
      return () => clearTimeout(timer);
    }
    prevDirectionRef.current = direction;  // Atualiza a direção anterior
  }, [direction]);

  return (
    
    <SlideDiv direction={direction} open={!open}>
      {children}
    </SlideDiv>
   
  );
}

export default Deslizante;


