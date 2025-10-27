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
    
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.15);
  }

  h1 {
    font-size: 1.1rem;
    color: #222;
    margin-top: 1rem;
    font-weight: 600;
  }

  p {
    font-size: 0.95rem;
    color: #666;
    margin-top: 0.5rem;
  }

`;

export const Img = styled.img`
  width: 100%;
  
  object-fit: cover;
  border-radius: 12px;
`;
