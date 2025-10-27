import { useEffect, useState } from "react";

function Return(){
    const [token, setToken] = useState("")
    const [shopId , setShopId] = useState("")
    
    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        if (storedToken) setToken(storedToken);

        const storedShopId = localStorage.getItem("shop_id");
        if (storedShopId) setShopId(storedShopId);
    }, []);


    async function GetReturn() {
    try {
        alert(token)
        alert(shopId)
      const res = await fetch("https://rmabackend-zuvt.onrender.com/get_return", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, shop_id: shopId })
      });

      const data = await res.json();
      console.log(data);
      
      
    } catch (error) {
      console.error("Erro ao gerar token:", error);
      alert("Erro ao gerar token");
    }
  };
    
    
    return(
        <div>
            <button onClick={GetReturn}>Buscar</button>
        </div>
    )
}

export default Return;