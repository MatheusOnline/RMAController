import React, { useState, useEffect } from "react";
import CryptoJS from "crypto-js";
import { useSearchParams } from "react-router-dom";

const ShopeeAuth: React.FC = () => {
  const [authUrl, setAuthUrl] = useState("");
  const [token, setToken] = useState("");
  const [searchParams] = useSearchParams();

  const code = searchParams.get("code");
  const shopId = searchParams.get("shop_id");

  const partnerId = 2013259;
  const key = "shpk79414a436a4a64585553496764445948414c66555372416945654d7a424a";
  const host = "https://partner.shopeemobile.com";

  // Gera URL de autenticação
  const generateAuthUrl = () => {
    const ts = Math.floor(Date.now() / 1000);
    const path = "/api/v2/shop/auth_partner";
    const baseStr = `${partnerId}${path}${ts}`;
    const sign = CryptoJS.HmacSHA256(baseStr, key).toString(CryptoJS.enc.Hex);
    const url = `${host}${path}?partner_id=${partnerId}&redirect=https://rma-controller.vercel.app/auth/&timestamp=${ts}&sign=${sign}`;
    setAuthUrl(url);
  };

  // Pega token
  const getTokenShopLevel = async () => {
    try {
      const res = await fetch("https://rmabackend-zuvt.onrender.com/generateToken", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, shop_id: shopId })
      });

      const data = await res.json();
      console.log("Token data:", data);
      setToken(data.access_token); // <-- salva no estado
    } catch (error) {
      console.error("Erro ao gerar token:", error);
      alert("Erro ao gerar token");
    }
  };

  // Busca token quando code e shopId existirem
  useEffect(() => {
    if (code && shopId) getTokenShopLevel();
  }, [code, shopId]);

  // Chama GetProfile depois que o token chegar
  useEffect(() => {
    if (token && shopId) GetProfile();
  }, [token]);

  // Busca perfil
  const GetProfile = async () => {
    try {
      const res = await fetch("https://rmabackend-zuvt.onrender.com/get_profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, shop_id: shopId })
      });

      const data = await res.json();
      console.log("Perfil da loja:", data);
      alert(`Loja: ${data.shop_name || "Sem nome"}`);
    } catch (error) {
      console.error("Erro ao buscar perfil:", error);
      alert("Erro ao buscar perfil");
    }
  };

  return (
    <div>
      <h1>Shopee Auth</h1>
      <button onClick={generateAuthUrl}>Gerar URL</button>
      {authUrl && (
        <p>
          <a href={authUrl} target="_blank" rel="noopener noreferrer">
            {authUrl}
          </a>
        </p>
      )}

      <div>
        <p>Code: {code ?? "não fornecido"}</p>
        <p>Shop ID: {shopId ?? "não fornecido"}</p>
        <p>Token: {token ? "✅ Gerado" : "❌ Não gerado"}</p>
      </div>
    </div>
  );
};

export default ShopeeAuth;
