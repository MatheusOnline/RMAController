import styled from 'styled-components';
import { GlobalStyle } from '../styles/GlobalStyle.tsx';
//components
import CardIndex from '../components/cardIndex.tsx'
import ReturnTable from '../components/returnTable.tsx'


const HeaderPage = styled.header`
    width: 100%;
    height: 90px;
    border-radius: 0px 0px 25px 25px;
    background-color: #125f8b;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
`
const ListCard = styled.div`
    width: 85%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px; 
    margin: auto;
` 


function Home (){
    return(
        <>
            <GlobalStyle />
            <HeaderPage>
                <h1>Controle de devoluções</h1>
            </HeaderPage>
            <ListCard>
                <CardIndex descript="Casos concluídos no Mês" count={48} color="red" />
                <CardIndex descript="Total de Casos Ativos" count={12} color="blue" />
                <CardIndex descript="Aguardando Recebimento/Análise" count={32} color="green" />
                <CardIndex descript="Aguardando Recebimento/Análise" count={32} color="yellow" />
            </ListCard>
            
            <ReturnTable/>
        
        </>

    )
}

export default Home;