import styled from "styled-components";

export const Page = styled.main`
  width: 100%;
  height: 100%;
`
export const ContainerScan = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ButtonExit = styled.button`
  width: 90%;
  height: 20%;
  background-color: #125f8b;
  border: none;
  margin-top: 80%;
  color: aliceblue;

  transition: 0.3s ease;
  &:hover{
    cursor: pointer;
    background: #125f8bca;
  }
`
export const ContainerContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  
  flex-direction: column;
  gap: 10px;
`
export const Wrapper = styled.div`
  width: 90%;
  padding: 12px;
  background: #FFFFFF;
  
`

export const ConfimButton = styled.button`
  width: 90%;
  height: 10%;
  border-radius: 6px;
  background-color: #125f8b;
  border: none;
  font-size: 24px;
  color: #f4f4f4;
`

export const ContainerReason = styled.div`
  background-color: #f5f5f5;
  width: 100%;
  padding: 12px;
  box-sizing: border-box;
  
`

export const ContainerObservation = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & h4{
    width: 100%;
  }
`

export const TextArea = styled.textarea`
  width: 90%;
  height: 150px;
  resize: none; /* ou none, both, horizontal */
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  font-size: 16px;
`;
