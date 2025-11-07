import { useEffect, useState } from "react";

//=========Styles========//
import {Page, FunctionBar, ButtonRefresh, RefreshIcon, ContainerInput, InputSeach, SeachIcon, ContainerNotreturn, WapperNoReturn, TextNoReturn, TableReturn, ContainerPage, LoadScreen, Spinner, SelectStatus,ContainerSelect } from "./style";

//=======COMPONENTES========//
import Header from "../../components/header/header";
import ReturnCard from "../../components/Return_Card/Index";

function Return() {
    
    

    const [returns, setReturns] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [status, setStatus] = useState("")
    

    var storedShopId:string;
    //=========FUNCAO CHAMADA NA HORA QUE A PAGINA É CARREGADA======//
    useEffect(() => {
        const storedShopId = localStorage.getItem("shop_id");
        if (!storedShopId) {
            alert("Token ou ID da loja está faltando");
            return;
        }

        const cached = sessionStorage.getItem("returns");

        if (cached) {
            console.log("✅ Usando cache de devoluções");
            setReturns(JSON.parse(cached));
        } else {
            console.log("📡 Buscando devoluções no servidor...");
            GetReturn(storedShopId);
        }
        
    }, []);

    //=========FUNCAO PARA CHAMAR A FUNÇAO DE DEVOLUÇOES======//
    function CallFunctionReturn(){
        storedShopId = localStorage.getItem("shop_id") || "";


        if ( storedShopId) {
            GetReturn(storedShopId);
        }else{
            alert("Token ou Id da loja está faltando")
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

            console.log("Resposta da Shopee:", JSON.stringify(data, null, 2));
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
                }));

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

    //=========FUNCAO PARA TRADUZIR O STATUS==========//
    function translateStatus(status:string){
        const translations: Record<string, string> = {
            ACCEPTED: "Aceito",
            CANCELLED: "Cancelado",
            PROCESSING: "Processamento",
            REQUESTED: "Solicitada",
            COMPLETED: "Concluído",
            JUDGING: "Julgamento"
        };
        return translations[status.toUpperCase()] || status
    }
    
    //===========FUNCAO PARA TRADUZIR A REAÇAO==========//
    function translateReason(reason:string){
        const translations: Record<string, string> = {
            ITEM_MISSING: "ITEM FALTANDO",
            FUNCTIONAL_DMG: "FUNCIONAL COM DANO",
            DAMAGED_OTHERS:"DEMAIS TIPOS DE DANO",
            NOT_RECEIPT: "NÃO RECEBI",
            CHANGE_MIND: "MUDEI DE IDEIA",
            WRONG_ITEM: "ITEM ERRADO",
            OUTER_DAMAGED_PACKAGE: "EMBALAGE DANIFICADA"   
        }

        return translations[reason.toUpperCase() || reason]
    }

    //========FILTRA AS DEVOLUCOES PELO NOME E PELO ESTATUS========//
   const filteredReturns = returns.filter((ret) => {
        // filtro por nome digitado
        const buyerMatch = ret.buyerName.toLowerCase().includes(searchTerm.toLowerCase());

        // status traduzido 
        const statusTraduzido = ret.status.toLowerCase();

        // busca por texto digitado (pode ser nome ou status)
        const searchMatch = statusTraduzido.includes(searchTerm.toLowerCase());

        // filtro pelo select (se o select estiver vazio, ignora)
        const statusFilter =
            status === "" || statusTraduzido === status.toLowerCase();

        // resultado final
        return (buyerMatch || searchMatch) && statusFilter;
    });


    return (
        <Page>
            <Header/>
            {loading ? 
            (
                <LoadScreen>
                    <Spinner></Spinner>
                </LoadScreen>
            ) 
            : 
            (
                <ContainerPage>     
                    <FunctionBar>
                        <ButtonRefresh onClick={CallFunctionReturn}><RefreshIcon/></ButtonRefresh>
                        <ContainerInput>
                            <SeachIcon/>
                            <InputSeach
                                type="text"
                                placeholder="Buscar pelo nome"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}/>
                        </ContainerInput>
                      
                        <ContainerSelect >
                           
                            <SelectStatus value={status} onChange={(e) => setStatus(e.target.value)}>
                                <option value="">Filtre pelo status</option>
                                <option value="Aceito">Aceito</option>
                                <option value="Processamento">Processamento</option>
                                <option value="Cancelado">Cancelado</option>
                                <option value="Solicitada">Solicitada</option>

                            </SelectStatus>
                        </ContainerSelect>
                    </FunctionBar>

                    {filteredReturns.length > 0 ? 
                    (
                        <TableReturn>
                            {filteredReturns.map((ret, index) => (
                                <ReturnCard  key={index} datas={ret} />
                            ))}
                        </TableReturn>
                    ) 
                    : 
                    (
                        !loading && <ContainerNotreturn><WapperNoReturn><TextNoReturn>Nenhuma devolução encontrada.</TextNoReturn></WapperNoReturn></ContainerNotreturn>
                    )}
                </ContainerPage>
            )}
        </Page>
    );
}

export default Return;
