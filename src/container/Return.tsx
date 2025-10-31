import { useEffect, useState } from "react";

import Header from "../components/header/header";

//=======COMPONENTES========//
import ReturnCard from "../components/Return_Card/Index";

function Return() {
    const [token, setToken] = useState("");
    const [shopId, setShopId] = useState("");
    const [returns, setReturns] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState(""); // filtro pelo nome
    

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        if (storedToken) setToken(storedToken);

        const storedShopId = localStorage.getItem("shop_id");
        if (storedShopId) setShopId(storedShopId);
    }, []);

    async function GetReturn() {
        try {
            
            setLoading(true);
            const res = await fetch("https://rmabackend-zuvt.onrender.com/get_return",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ token, shop_id: shopId }),
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
            }
            else {
                alert("Nenhum dado encontrado");
            }
        } catch (error) {
            alert("Erro ao buscar devoluçõesaaaa");
        } finally { setLoading(false); }
    }

    // lista filtrada pelo nome
    const filteredReturns = returns.filter((ret) =>
        ret.buyerName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
        <Header/>
            <div style={{ padding: "20px", fontFamily: "Arial" }}>

                <button onClick={GetReturn}>
                    {loading ? "Carregando..." : "Buscar Devoluções"}
                </button>

                <div style={{ marginBottom: "20px" }}>
                    <input
                        type="text"
                        placeholder="Buscar pelo nome"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        
                    />
                </div>

                {filteredReturns.length > 0 ? (
                    <table>
                            {filteredReturns.map((ret, index) => (
                               <ReturnCard  key={index} datas={ret} />
                            ))}
                    </table>
                ) : (
                    !loading && <p>Nenhuma devolução encontrada.</p>
                )}
            </div>
        </>
    );
}

export default Return;
