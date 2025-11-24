import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: var(--background-color);
  display: flex;
  justify-content: center;
 
`;

export const ContainerForm = styled.section`
    width: 100%;
    height: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Form = styled.form`
  width: 380px;
  padding: 40px 30px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 22px;

  h2 {
   
    color: var(--brand-color);
    font-weight: 600;
    margin-bottom: 10px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 6px;

  p {
    font-size: 15px;
    color: #333;
  }
`;

export const Input = styled.input`
  padding: 12px 14px;
  border: 2px solid #e3e3e3;
  border-radius: 8px;
  outline: none;
  font-size: 15px;
  transition: 0.2s;

  &:focus {
    border-color: var(--item-color);
    box-shadow: 0 0 0 2px var(--transparent-color);
  }
`;

export const Error = styled.span`
  color: #d62828;
  background: #fceaea;
  padding: 10px;
  border-radius: 6px;
  font-size: 14px;
  text-align: center;
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px 0;
  background: var(--brand-color);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: var(--item-color);
  }
`;
