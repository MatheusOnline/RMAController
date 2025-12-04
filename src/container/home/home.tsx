
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

/* ===========================
   Styled
   =========================== */
const Page = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(180deg, #13a2c5 0%, #0f172a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;

const Card = styled.div`
  background: #0f1a2a;
  border-radius: 12px;
  padding: 36px;
  max-width: 980px;
  width: 100%;
  box-shadow: 0 10px 30px rgba(2,6,23,0.6);
  color: #e6eef8;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;


const Title = styled.h1`
  font-size: 26px;
  margin: 0;
`;

const Subtitle = styled.p`
  margin: 6px 0 0;
  color: #9fb0c8;
  font-size: 14px;
`;

const Actions = styled.div`
  display: flex;
  gap: 12px;
  margin-left: auto;
`;

const Btn = styled.button`
  background: #11283a;
  color: #e6eef8;
  border: 1px solid rgba(255,255,255,0.04);
  padding: 10px 14px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: transform .12s, background .12s;
  &:hover { transform: translateY(-2px); background: #0d2231; }
`;





/* ===========================
   Component
   =========================== */

export default function Home() {
  const navigate = useNavigate();
  

  
  return (
    <Page>
      <Card>
        <Top>
          

          <div>
            <Title>Devolu</Title>
            <Subtitle>Controle de devoluções Shopee — veja, filtre e gerencie com rapidez.</Subtitle>
          </div>

          <Actions>
            <Btn onClick={() => navigate("/returns")}>Ir para Devoluções</Btn>
            <Btn onClick={() => navigate("/dashboard")}>Integrações</Btn>
          </Actions>
        </Top>

       
      </Card>
    </Page>
  );
}
