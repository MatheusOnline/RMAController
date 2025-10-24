import React, { useState, useEffect } from "react";
import CryptoJS from "crypto-js";
import { useSearchParams } from "react-router-dom";

const ShopeeAuth: React.FC = () => {
  const [authUrl, setAuthUrl] = useState<string>("");
  const [searchParams] = useSearchParams();
  const [token, setToken] = useState("");
  const code = searchParams.get("code");      // pode ser null
  const shopId = searchParams.get("shop_id"); // pode ser null

  const partnerId = 2013259;
  const key = "shpk79414a436a4a64585553496764445948414c66555372416945654d7a424a";
  const host = "https://partner.shopeemobile.com";

  // Gera a URL de autenticação
  const generateAuthUrl = () => {
    const ts = Math.floor(Date.now() / 1000);
    const path = "/api/v2/shop/auth_partner";
    const baseStr = `${partnerId}${path}${ts}`;
    const sign = CryptoJS.HmacSHA256(baseStr, key).toString(CryptoJS.enc.Hex);
    const url = `${host}${path}?partner_id=${partnerId}&redirect=https://rma-controller.vercel.app/auth/&timestamp=${ts}&sign=${sign}`;
    setAuthUrl(url);
  };

  // Pega o token usando code e shopId
  const getTokenShopLevel = async () => {
    try{
      const res = await fetch("https://rmabackend-zuvt.onrender.com/generateToken", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code, shop_id: shopId })
    });

    const data = await res.json();
    console.log(data);
    setToken(data.response.access_token)
    alert(token)
    }
    catch(error){
    alert(error)
    }
  };

  // Se code e shopId existirem, busca o token
  useEffect(() => {
    if(code !== "" || shopId !=="")
    {

      getTokenShopLevel();
    }
  }, [code, shopId]);

  return (
    <div>
      <h1>Shopee Auth URL</h1>
      <button onClick={generateAuthUrl}>Gerar URL</button>
      {authUrl && (
        <p>
          <a href={authUrl} target="_blank" rel="noopener noreferrer">
            {authUrl}
          </a>
        </p>
      )}

      <div>
        <h1>Shopee Auth</h1>
        <p>Code: {code ?? "não fornecido"}</p>
        <p>Shop ID: {shopId ?? "não fornecido"}</p>
       
      </div>
    </div>
  );
};

export default ShopeeAuth;
