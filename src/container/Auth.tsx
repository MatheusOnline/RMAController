import React, { useState, useEffect } from "react";
import CryptoJS from "crypto-js";
import { useSearchParams } from "react-router-dom";

const ShopeeAuth: React.FC = () => {
  const [authUrl, setAuthUrl] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [refreshToken, setRefreshToken] = useState<string>("");
  const [searchParams] = useSearchParams();

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
    if (!code || !shopId) return;

    const ts = Math.floor(Date.now() / 1000);
    const path = "/api/v2/auth/token/get";
    const baseStr = `${partnerId}${path}${ts}`;
    const sign = CryptoJS.HmacSHA256(baseStr, key).toString(CryptoJS.enc.Hex);

    const url = `${host}${path}?partner_id=${partnerId}&timestamp=${ts}&sign=${sign}`;

    const body = {
      code,
      shop_id: parseInt(shopId),
      partner_id: partnerId
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });

      const data = await response.json();
      setToken(data.access_token);
      setRefreshToken(data.refresh_token);
      console.log("Token:", data.access_token);
      console.log("Refresh Token:", data.refresh_token);
    } catch (err) {
      console.error("Erro ao pegar token:", err);
    }
  };

  // Se code e shopId existirem, busca o token
  useEffect(() => {
    getTokenShopLevel();
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
        {token && <p>Access Token: {token}</p>}
        {refreshToken && <p>Refresh Token: {refreshToken}</p>}
      </div>
    </div>
  );
};

export default ShopeeAuth;
