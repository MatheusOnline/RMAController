import styled from 'styled-components';
import { GlobalStyle } from '../styles/GlobalStyle.tsx';

//components
import CardIndex from '../components/cardIndex.tsx'
import ReturnTable from '../components/returnTable.tsx'
import Header from '../components/header/header.tsx';
//Services




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
            <Header/>
            <ListCard>
                
                <CardIndex descript="Total de Casos Ativos" count={12} color="#125f8b" />
                <CardIndex descript="Aguardando Recebimento/Análise" count={32} color="#125f8b" />
                <CardIndex descript="Casos resolvidos" count={32} color="#125f8b" />
            </ListCard>
            
            
        
        </>

    )
}

export default Home;