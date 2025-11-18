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

function Dashboard() {
  return (
    <Page>

      <TitleSection>Dados Gerais</TitleSection>

      <ContainerCards>
        <CardIndex descript="Quantidade de devoluções" count={125} color="#41afee" />
        <CardIndex descript="Casos concluídos" count={12} color="#41afee" />
        <CardIndex descript="Casos em julgamento" count={55} color="#41afee" />
        <CardIndex descript="Casos pendentes" count={30} color="#41afee" />
      </ContainerCards>

      <Line />

      <TitleSection>Visão Geral</TitleSection>

      <ChartsWrapper>
        <ChartCard>
          <h3>Motivos das Devoluções</h3>
          <ReasonChart />
        </ChartCard>

        <ChartCard>
          <h3>Devoluções por Dia</h3>
          <DailyChart />
        </ChartCard>
      </ChartsWrapper>

    </Page>
  );
}

export default Dashboard;
