import { useEffect, useState } from "react";

//=========Styles========//
import { FunctionBar, ButtonRefresh, RefreshIcon, ContainerInput, InputSeach, SeachIcon, ContainerNotreturn, WapperNoReturn,TextNoReturn } from "./style";

//=======COMPONENTES========//
import Header from "../../components/header/header";
import ReturnCard from "../../components/Return_Card/Index";

function Return() {
    
    const [returns, setReturns] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    

    //=========FUNCAO CHAMADA NA HORA QUE A PAGINA É CARREGADA======//
    useEffect(() => {
        const storedToken = localStorage.getItem("token") || "";
        const storedShopId = localStorage.getItem("shop_id") || "";


        if (storedToken && storedShopId) {
            GetReturn(storedToken, storedShopId);
        }
    }, []);

    //=========FUNCAO PARA BUSCAR AS DEVOLUCOS NO BACKEND==========//
    async function GetReturn(tokenParam: string, shopIdParam: string) {
        try {
                
            setLoading(true);
            const res = await fetch("https://rmabackend-zuvt.onrender.com/get_return",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ token:tokenParam, shop_id: shopIdParam }),
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
                        reason: ret.reason || ret.text_reason || "",
                        status: ret.status || "",
                        item_price: ret.item_price || "",
                        dateCreated: new Date(ret.create_time * 1000).toLocaleDateString("pt-BR"),
                }));

            setReturns(formatted);
            } else{
                alert("Nenhum dado encontrado");
            }
        } catch (error) {
            alert("Erro ao buscar devoluçõesaaaa");
        } finally{ 
            setLoading(false); 
            }
        }

    //========FILTRA AS DEVOLUCOES PELO NOME========//
    const filteredReturns = returns.filter((ret) =>
        ret.buyerName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Header/>
            <div style={{ padding: "20px", fontFamily: "Arial" }}>
                
                <FunctionBar>
                    <ButtonRefresh><RefreshIcon/></ButtonRefresh>

                    <ContainerInput>
                        <SeachIcon/>
                        <InputSeach
                            type="text"
                            placeholder="Buscar pelo nome"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            
                        />
                    </ContainerInput>
                </FunctionBar>

                {filteredReturns.length > 0 ? (
                    <table style={{ width: "100%" }}>
                            {filteredReturns.map((ret, index) => (
                               <ReturnCard  key={index} datas={ret} />
                            ))}
                    </table>
                ) : (
                    !loading && <ContainerNotreturn><WapperNoReturn><TextNoReturn>Nenhuma devolução encontrada.</TextNoReturn></WapperNoReturn></ContainerNotreturn>
                )}
            </div>
        </>
    );
}

export default Return;
