import React, { useState } from "react";
import CryptoJS from "crypto-js";

const ShopeeAuth: React.FC = () => {
  const [authUrl, setAuthUrl] = useState<string>("");

  const partnerId = 2013259;
  const key = "shpk79414a436a4a64585553496764445948414c66555372416945654d7a424a";
  const host = "https://partner.shopeemobile.com";

  const generateAuthUrl = () => {
    const ts = Math.floor(Date.now() / 1000); // timestamp em segundos
    const path = "/api/v2/shop/auth_partner";
    const baseStr = `${partnerId}${path}${ts}`;

    // gera HMAC SHA256
    const sign = CryptoJS.HmacSHA256(baseStr, key).toString(CryptoJS.enc.Hex);

    const url = `${host}${path}?partner_id=${partnerId}&redirect=https://rma-controller.vercel.app/auth//&timestamp=${ts}&sign=${sign}`;

    setAuthUrl(url);
  };

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
    </div>
  );
};

export default ShopeeAuth;