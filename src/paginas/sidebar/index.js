import React, { useState} from 'react';
import styled from 'styled-components';
import { FiMenu, FiX  } from 'react-icons/fi';
import { FaHome, FaInfoCircle,FaAddressBook, FaCertificate } from 'react-icons/fa';
import {  Link, useLocation} from 'react-router-dom';



const StyledMenu = styled.div`
 border-radius: 10px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #23293e;
  border: 3px solid rgba(255, 255, 255, 0.18);
  height: 100%;
  text-align: left;
  padding: 2.0%;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform .5s ease;
  transform: ${({ open }) => (open ? 'translateX(0%)' : 'translateX(-100%)')};
  z-index: 3;
  gap: 20px;
  &:hover {
    background-color: rgba(24, 29, 43, 0.7);
   
`;

const StyledIcon = styled.button`
  position: fixed;
  top: 1.8%;
  left: 2.20%;
  display: flex;
  height: 2%;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 10;

`;
const RotLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10%;
  color: white;
  text-decoration: none;
 
  &:hover {
    text-decoration: underline;
  }
  svg {
    margin-bottom: 8px;
  }
`;

const StyledButton = styled.button`
  z-index: 9;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  &:hover, &:focus {
    outline: none;
  }
`;




const Sidebar = ( ) => {
  const [open, setOpen0] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === "/portifolio";
  const isAboutPage = location.pathname === '/about';
  const isCertificado = location.pathname === '/certificado';
  const isContatos = location.pathname === '/contatos';



  return (
    <>
    
      <StyledIcon onClick={() => setOpen0(!open)}>
        {open ? <FiX size={28}  color="#C44848"/> : <FiMenu size={28}   color="white"/>}
      </StyledIcon>

 <StyledMenu open={open}>

  <StyledButton onClick={() => setOpen0(false)}>
  <RotLink  to={"/portifolio"}>
      <FaHome size={28} color={isHomePage ? "#C44848" : "white"}/>Home
      </RotLink>
  </StyledButton>

  <StyledButton onClick={() => setOpen0(false)} >
  <RotLink to={"/about"}  >
      <FaInfoCircle size={28} color={isAboutPage ? "#C44848" : "white"}/>About
      </RotLink>
</StyledButton>

<StyledButton onClick={() => setOpen0(false)} >
  < RotLink  to={"/certificado"}  >
      <FaCertificate size={28} color={isCertificado ? "#C44848" : "white"}/>Certificado
      </RotLink>
</StyledButton>

<StyledButton onClick={() => setOpen0(false)} >
  <RotLink to={"/contatos"}  >
      <FaAddressBook size={28} color={isContatos ? "#C44848" : "white"}/>Contatos
      </RotLink>
</StyledButton>

</StyledMenu>
    </> 
  );
};


export default Sidebar;
