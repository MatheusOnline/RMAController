import styled from 'styled-components';


//components
import CardIndex from '../components/cardIndex.tsx'

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
            <ListCard>
                
                <CardIndex descript="Total de Casos Ativos" count={12} color="#125f8b" />
                <CardIndex descript="Aguardando Recebimento/Análise" count={32} color="#125f8b" />
                <CardIndex descript="Casos resolvidos" count={32} color="#125f8b" />
            </ListCard>
            
            
        
        </>

    )
}

export default Home;