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
                setReturns(data.return_list);
            }
            else {
                alert("Nenhum dado encontrado");
            }
        } catch (error) {
            console.error("Erro ao buscar devoluções:", error);
            alert("Erro ao buscar devoluçõesaaaa");
        } finally { setLoading(false); }
    }

    // lista filtrada pelo nome
    const filteredReturns = returns.filter((ret) =>
        ret.user?.username?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
        <Header/>
            <div style={{ padding: "20px", fontFamily: "Arial" }}>

                <button
                    onClick={GetReturn}
                    style={{
                        backgroundColor: "#007bff",
                        color: "white",
                        border: "none",
                        padding: "10px 20px",
                        borderRadius: "6px",
                        cursor: "pointer",
                        marginBottom: "20px",
                    }}
                >
                    {loading ? "Carregando..." : "Buscar Devoluções"}
                </button>

                <div style={{ marginBottom: "20px" }}>
                    <input
                        type="text"
                        placeholder="Buscar pelo nome"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{ padding: "8px", width: "300px", borderRadius: "4px", border: "1px solid #ccc" }}
                    />
                    <input
                        type="text"
                        placeholder="qunatos dias"
                        value={day}
                        onChange={(e) => setDays(e.target.value)}
                        style={{ padding: "8px", width: "300px", borderRadius: "4px", border: "1px solid #ccc" }}
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
                                <th style={{ padding: "8px", border: "1px solid #ddd" }}>ID</th>
                                <th style={{ padding: "8px", border: "1px solid #ddd" }}>Usuário</th>
                                <th style={{ padding: "8px", border: "1px solid #ddd" }}>Pedido</th>
                                <th style={{ padding: "8px", border: "1px solid #ddd" }}>Devolução</th>
                                <th style={{ padding: "8px", border: "1px solid #ddd" }}>Status</th>
                                <th style={{ padding: "8px", border: "1px solid #ddd" }}>Motivo</th>
                                <th style={{ padding: "8px", border: "1px solid #ddd" }}>Valor (R$)</th>
                                <th style={{ padding: "8px", border: "1px solid #ddd" }}>Produto</th>
                                <th style={{ padding: "8px", border: "1px solid #ddd" }}>Rastreio</th>
                                <th style={{ padding: "8px", border: "1px solid #ddd" }}>Data criada'</th>
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
