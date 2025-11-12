import styled from "styled-components";

export const Page = styled.main`
  width: 100%;
  height: 100%;
  background-color: #f2f6f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 16px;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;

`;

export const ContainerScan = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

export const ButtonExit = styled.button`
  width: 90%;
  max-width: 350px;
  height: 48px;
  background-color: #125f8b;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  transition: 0.3s ease;
  &:hover {
    cursor: pointer;
    background: #0e4e73;
  }
`;

export const ContainerContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  
`;

export const Wrapper = styled.div`
  width: 95%;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  padding: 14px 12px;
  font-size: 15px;
  line-height: 22px;
  color: #333;

  & p {
    margin: 4px 0;
  }
`;

export const ConfimButton = styled.button`
  width: 90%;
  height: 100px;
  border-radius: 10px;
  background-color: #125f8b;
  border: none;
  font-size: 18px;
  font-weight: 600;
  color: #f4f4f4;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  
  transition: 0.3s ease;

  &:active {
    background-color: #0e4e73;
    transform: scale(0.98);
  }
`;

export const ContainerReason = styled.div`
  background-color: #f5f5f5;
  width: 94%;
  padding: 12px;
  border-radius: 6px;
  color: #333;
  font-size: 14px;
`;

export const ContainerObservation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;

  & h4 {
    width: 100%;
    color: #125f8b;
    font-size: 16px;
    margin-bottom: 4px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 120px;
  resize: none;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  font-size: 15px;
  font-family: inherit;
  color: #333;
  box-sizing: border-box;
  outline: none;
  background-color: #fafafa;

  &:focus {
    border-color: #125f8b;
    background-color: #fff;
  }
`;

/* Ajuste visual do container do uploader (opcional) */
export const ContainerUploader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 10px;

  button {
    width: 90%;
    max-width: 320px;
    height: 48px;
    background-color: #1a73e8;
    color: #fff;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 600;
    transition: 0.3s ease;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);

    &:hover {
      background-color: #1765c1;
      cursor: pointer;
    }
  }

  img {
    width: 90%;
    max-width: 320px;
    border-radius: 8px;
    border: 1px solid #ddd;
    object-fit: cover;
  }
`;


export const ContainerItem = styled.div`
  display: flex;
  gap: 5px;
`
export const CotainerDatasw = styled.div`
  width: 90%;
  
`
export const ImgItem = styled.img`
  width: 25%;
`
export const ItemDatas = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

`