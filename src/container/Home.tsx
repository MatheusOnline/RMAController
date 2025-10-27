import styled from 'styled-components';
import { GlobalStyle } from '../styles/GlobalStyle.tsx';
import { useEffect, useState } from 'react';
//components
import CardIndex from '../components/cardIndex.tsx'
import ReturnTable from '../components/returnTable.tsx'
import Header from '../components/header/header.tsx';
//Services
import Apiget from "../services/Apiget.tsx"



const ListCard = styled.div`
    width: 85%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px; 
    margin: auto;
` 


function Home (){
     const [data, setData] = useState<any[]>([]);
     useEffect(() => {
      async function fetchData() {
        try {
          const res = await Apiget();
          setData(res)
        } catch (error) {
          console.error("Erro ao buscar dados:", error);
        }
      }
    
      fetchData();
    }, []);

    return(
        <>
            <GlobalStyle />
            <Header/>
            <ListCard>
                <CardIndex descript="Total de Casos" count={data.length} color="#125f8b" />
                <CardIndex descript="Total de Casos Ativos" count={12} color="#125f8b" />
                <CardIndex descript="Aguardando Recebimento/Análise" count={32} color="#125f8b" />
                <CardIndex descript="Casos resolvidos" count={32} color="#125f8b" />
            </ListCard>
            
            <ReturnTable data={data}/>
        
        </>

    )
}

export default Home;