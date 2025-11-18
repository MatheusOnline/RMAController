import styled from "styled-components";

export const Page = styled.div`
  width: 100%;
  padding: 30px 40px;
  background: #f5f7fb;
  min-height: 100vh;
  box-sizing: border-box;
`;

export const TitleSection = styled.h2`
  margin: 20px 0 15px;
  font-size: 1.6rem;
  color: #474744;
  font-weight: 600;
`;

export const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 25px;
`;

export const ChartsWrapper = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 30px;
`;

export const ChartCard = styled.div`
  background: #fff;
  padding: 20px 25px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 1.2rem;
    color: #222;
    margin-bottom: 18px;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #d1d1d1;
  margin: 35px 0;
  opacity: 0.4;
`;
