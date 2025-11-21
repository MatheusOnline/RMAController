import styled from "styled-components";
import { VscVerified } from "react-icons/vsc";

export const Page = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #f5f7fb;
    padding: 40px 0;

    display: flex;
    justify-content: center;
`;
export const MainContainer = styled.div`
    width: 100%;
    max-width: 1000px;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 50px;
    box-sizing: border-box;
   
`;

export const DetailContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;



export const HeaderDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  h1 {
    font-size: 32px;
    font-weight: 700;
    color: #202124;
  }
`;

export const SubText = styled.p`
  font-size: 16px;
  color: #4a4a4a;
  margin: 0;
`;

export const ItemList = styled.li`
  display: flex;
  align-items: center;
  font-size: 16px;
  gap: 8px;
  margin-bottom: 8px;
  color: #333;
`;

export const VerifildIcon = styled(VscVerified)`
  color: #0f9d58;
  font-size: 22px;
`;

export const CardsContainer = styled.div`
    width: 40%;
    display: flex;
    justify-content: center;
`;

