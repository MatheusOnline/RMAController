import styled from "styled-components";

export const ContainerCard = styled.button`
  width: 250px;
  min-height: 360px;
  border: none;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.25s;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;
    
 
  h1 {
    font-size: 1.1rem;
    color: #222;
    margin-top: 1rem;
    font-weight: 600;
  }

  p {
    font-size: 16px;
    font-weight: 500;
    color: #666;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
     transition: 0.10s ;
  }

`;

export const Img = styled.img`
  width: 100%;
  
  object-fit: cover;
  border-radius: 12px;
`;

export const ContainerClick = styled.div`
  width: 90%;
  height: 40px;
  box-sizing: border-box;
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  margin-top: 10px;
  transition: 0.10s ;
  & :hover{
    background-color: #ff000092;
    color: white;
  }
`
