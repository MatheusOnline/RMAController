import styled from "styled-components";

import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
    width: 97%;
    height: 70px;
    background-color: #125f8b; /* tom escuro */
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 40px;
    
   
  
`;

export const Logo = styled.h1`

  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Connect = styled(Link)`
  
  color: #fff;
  text-decoration: none;
`

export const StoreLogo = styled.div`
  width: 50px;
  height: 50px;

  border-radius: 50%;
  overflow: hidden;
  border: 1px solid white;
`