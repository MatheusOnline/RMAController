import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//=========Styles========//
import {Page, TitleSection ,FunctionBar, PageButton, 
     ContainerNotreturn, WapperNoReturn, TextNoReturn, TableReturn, ContainerPage, ReturnsSummary, TableScroll,TableContainer,FoosterTable } from "./style";

//=======COMPONENTES========//
import ReturnCard from "../../components/Return_Card/Index";
import LoadScreen from "../../components/Load";
import RadioStatus from "../../components/Inputs/RadioStatus/RadioStatus";
import InputSearch from "../../components/Inputs/InputSearch/InputSearch";
import ButtonRefresh from "../../components/Inputs/ButtonRefresh/ButtonRefresh"; 


import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
//======FUNCOES=======//
import translateReason from "../../utils/translateReason";
import translateStatus from "../../utils/translateStatus";
function Return() {
    const [returns, setReturns] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [status, setStatus] = useState("TODAS");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 25;
    var storedShopId:string;

    const navigate = useNavigate();
    //=========FUNCAO CHAMADA NA HORA QUE A PAGINA É CARREGADA======//
    useEffect(() => {

        const cached = sessionStorage.getItem("returns");

        if (cached) {
            console.log("✅ Usando cache de devoluções");
            setReturns(JSON.parse(cached));
        } else {
            console.log("📡 Buscando devoluções no servidor...");
            // CallFunctionReturn();
        }
        
    }, []);

    //=========FUNCAO PARA CHAMAR A FUNÇAO DE DEVOLUÇOES======//
    function CallFunctionReturn(){
        storedShopId = localStorage.getItem("shop_id") || "";


        if ( storedShopId) {
            GetReturn(storedShopId);
        }else{
            alert("Token ou Id da loja está faltando aa")
            navigate('/auth')
        }
    }

    //=========FUNCAO PARA BUSCAR AS DEVOLUÇOS NO BACKEND==========//
    async function GetReturn( shopIdParam: string){
        try {
                
            setLoading(true);
            
            const res = await fetch("https://rmabackend-zuvt.onrender.com/return/get",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ shop_id: shopIdParam }),
                });
            const data = await res.json();
            console.log(data)
            if (data && data.return_list) {
                const formatted = data.return_list.map((ret: any) => ({
                        portrait: ret.user?.portrait || "",
                        buyerName: ret.user?.username || "Desconhecido",
                        id_order: ret.order_sn || "",
                        id_request: ret.return_sn || "",
                        productImg: ret.item?.[0]?.images?.[0] || "",
                        productDescript: ret.item?.[0]?.name || "",
                        reason: translateReason(ret.reason),
                        status: translateStatus(ret.status),
                        item_price: ret.item_price || "",
                        dateCreated: new Date(ret.create_time * 1000).toLocaleDateString("pt-BR"),
                        rawDate: ret.create_time
                }));
            
            // Ordenar pela data mais recente
            formatted.sort((a: any, b: any) => b.rawDate - a.rawDate);
            setReturns(formatted);
            sessionStorage.setItem("returns", JSON.stringify(formatted));
            } else{
                alert("Nenhum dado encontrado");
            }
        } catch (error) {
            alert("Erro ao buscar devoluçõesaaaa");
        } finally{ 
            setLoading(false); 
        }
    }

    
   
    //========FILTRA AS DEVOLUCOES PELO NOME E PELO ESTATUS========//
   const filteredReturns = returns.filter((ret) => {
        // filtro por nome digitado
        const buyerMatch = ret.id_request.toLowerCase().includes(searchTerm.toLowerCase());

        // status traduzido 
        const statusTraduzido = ret.status.toLowerCase();

        // busca por texto digitado (pode ser nome ou status)
        const searchMatch = statusTraduzido.includes(searchTerm.toLowerCase());

        // filtro pelo select (se o select estiver vazio, ignora)
        const statusFilter =
            status === "TODAS" || statusTraduzido === status.toLowerCase();

        // resultado final
        return (buyerMatch || searchMatch) && statusFilter;
    });

    const totalPages = Math.ceil(filteredReturns.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentReturns = filteredReturns.slice(startIndex, startIndex + itemsPerPage);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, status]);

    return (
        <Page>
            {loading ? 
            (
                <LoadScreen/>
                    
            ) 
            : 
            (
                <ContainerPage>   
                    <TitleSection>Filtros</TitleSection>  
                    <FunctionBar>

                        <RadioStatus onSelect={setStatus} />
                        
                        <InputSearch onChange={setSearchTerm}/>
                      
                    </FunctionBar>


                       
                        <TableContainer>
                            <ReturnsSummary><ButtonRefresh onClick={CallFunctionReturn}/> {filteredReturns.length} Devoluções Encontrada <br /><p> Ultima Atualizaçao {new Date().toLocaleString()}</p></ReturnsSummary>
                            {filteredReturns.length > 0 ? 
                            ( 
                                <TableScroll>
                                    <TableReturn>
                                        {currentReturns.map((ret, index) => (
                                            <ReturnCard  key={index} datas={ret} />
                                        ))}
                                    </TableReturn>
                                    <FoosterTable>
                                        <PageButton 
                                            disabled={currentPage === 1}
                                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                        >
                                            <IoIosArrowBack/>
                                        </PageButton>

                                        {currentPage} / {totalPages}

                                        <PageButton
                                            disabled={currentPage === totalPages}
                                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                        >
                                            <IoIosArrowForward/>
                                        </PageButton>
                                    </FoosterTable>
                            </TableScroll>
                            ) 
                            : 
                            (
                                !loading && <ContainerNotreturn><WapperNoReturn><TextNoReturn>Nenhuma devolução encontrada.</TextNoReturn></WapperNoReturn></ContainerNotreturn>
                            )}
                        </TableContainer>
                    
                </ContainerPage>
            )}
        </Page>
    );
}

export default Return;
