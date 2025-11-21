import ReasonChart from "../../components/Charts/ReasonChart";
import DailyChart from "../../components/Charts/DailyChart";

import { 
  Page, 
  ContainerCards, 
  ChartsWrapper, 
  TitleSection, 
  Line, 
  ChartCard 
} from "./style";

import CardIndex from "../../components/cardIndex";
import { useEffect, useState } from "react";

function Dashboard() {
  const [datas, setDatas] = useState<any | null>(null);

  useEffect(() => {
    const shopId = localStorage.getItem("shop_id") || "";
    getDatas(shopId);
  }, []);

  async function getDatas(shopId: string) {
    try {
      const response = await fetch("https://rmabackend-zuvt.onrender.com/dashboard/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ shop_id: shopId })
      });

      const result = await response.json();

      if (!result.success) return;

      setDatas(result.datas); // <-- Salva tudo
    } catch (error) {
      alert(error);
    }
  }

  return (
    <Page>

      <TitleSection>Dados Gerais</TitleSection>

      <ContainerCards>
        <CardIndex 
          descript="Quantidade de devoluções" 
          count={datas?.totalCount?.[0]?.total || 0}
          color="#41afee" 
        />

        <CardIndex 
          descript="Casos concluídos" 
          count={datas?.statusCount?.find((i:any) => i._id === "CONCLUIDA")?.total || 0}
          color="#41afee" 
        />

        <CardIndex 
          descript="Casos em transporte" 
          count={datas?.statusCount?.find((i:any) => i._id === "EM TRANSPORTE")?.total || 0}
          color="#41afee" 
        />

        <CardIndex 
          descript="Casos solicitados" 
          count={datas?.statusCount?.find((i:any) => i._id === "SOLICITADA")?.total || 0}
          color="#41afee" 
        />
      </ContainerCards>

      <Line />

      <TitleSection>Visão Geral</TitleSection>

      <ChartsWrapper>
        <ChartCard>
          <h3>Motivos das Devoluções</h3>
          <ReasonChart data={datas?.reasonCount || []} />
        </ChartCard>

        <ChartCard>
          <h3>Devoluções por Dia</h3>
          <DailyChart data={datas?.last7Days || []} />
        </ChartCard>
      </ChartsWrapper>

    </Page>
  );
}

export default Dashboard;
