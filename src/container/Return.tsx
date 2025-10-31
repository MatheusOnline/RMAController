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
    const [day, setDays] = useState("");

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        if (storedToken) setToken(storedToken);

        const storedShopId = localStorage.getItem("shop_id");
        if (storedShopId) setShopId(storedShopId);
    }, []);

    async function GetReturn() {
        try {
            const days = parseInt(day)
            setLoading(true);
            const res = await fetch("https://rmabackend-zuvt.onrender.com/get_return",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ token, shop_id: shopId, days }),
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
                    dateCreated: new Date(ret.create_time * 1000).toLocaleDateString("pt-BR"),
                }));

                setReturns(formatted);
            }
            else {
                alert("Nenhum dado encontrado");
            }
        } catch (error) {
            console.error("Erro ao buscar devoluções:", error);
            alert("Erro ao buscar devoluçõesaaaa");
        } finally { setLoading(false); }
    }

     const test = [
  {
    portrait: "http://mms.img.susercontent.com/br-11134233-7r98o-m83jwszjfboxc8",
    buyerName: "elizgranetto",
    id_order: "251017BUP2PEHK",
    id_request: "2510310GD39JGUB",
    productImg: "http://mms.img.susercontent.com/br-11134207-7r98o-m5vhvcljjts5f7",
    productDescript: "Cama pet confortável estofada elegante - PROMOÇÃO IMPERDIVEL",
    reason: "ITEM_MISSING",
    status: "ACCEPTED",
    dateCreated: "20/10/25",
  }
];


    // lista filtrada pelo nome
    const filteredReturns = test.filter((ret) =>
        ret.buyerName.toLowerCase().includes(searchTerm.toLowerCase())
    );


   



    return (
        <>
        <Header/>
            <div style={{ padding: "20px", fontFamily: "Arial" }}>

                <button
                    onClick={GetReturn}
                  
                >
                    {loading ? "Carregando..." : "Buscar Devoluções"}
                </button>

                <div style={{ marginBottom: "20px" }}>
                    <input
                        type="text"
                        placeholder="Buscar pelo nome"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        
                    />
                    <input
                        type="text"
                        placeholder="qunatos dias"
                        value={day}
                        onChange={(e) => setDays(e.target.value)}
                    
                    />
                </div>

                {filteredReturns.length > 0 ? (
                    <table
                        style={{
                            width: "100%",
                            borderCollapse: "collapse",
                            textAlign: "left",
                            fontSize: "14px",
                        }}
                    >
                        <thead>
                            <tr style={{ backgroundColor: "#f2f2f2" }}>
                               
                                
                                <th style={{ padding: "8px", border: "1px solid #ddd" }}>Produto(s)</th>
                                <th style={{ padding: "8px", border: "1px solid #ddd" }}>Motivo de Devolução</th>
                                <th style={{ padding: "8px", border: "1px solid #ddd" }}>Status da solicitação</th>
                                <th style={{ padding: "8px", border: "1px solid #ddd" }}>Valor (R$)</th>
                                <th style={{ padding: "8px", border: "1px solid #ddd" }}>Valor (R$)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredReturns.map((ret, index) => (
                               <ReturnCard  key={index} datas={ret} />
                            ))}
                            
                        </tbody>
                    </table>
                ) : (
                    !loading && <p>Nenhuma devolução encontrada.</p>
                )}
            </div>
        </>
    );
}

export default Return;
