import styled from "styled-components";

const WrapCard = styled.div`
  background-color: white;
  border: none;
  border-top: 8px solid red;
  border-radius: 12px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin: 50px;
  padding: 16px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ContentNumber = styled.p`
  font-size: 58px;
  color: red;
  height: 70%;
`;

const FooterCard = styled.div`
  width: 100%;
`;

const Text = styled.p`
  width: 100%;
  color: #3e3e3e;
`;

interface Variables {
  descript: string;
  count: number;
  color: string;
}

function CardIndex({ descript, count, color }: Variables) {
  return (
    <WrapCard style={{ borderTopColor: color }}>
      <ContentNumber style={{ color }}>{count}</ContentNumber>
      <FooterCard>
        <Text>{descript}</Text>
      </FooterCard>
    </WrapCard>
  );
}

export default CardIndex;
