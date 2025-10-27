import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

import CardLink from "../components/Cards/cardLink";
import Header from "../components/header/header";
export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  padding: 2rem;
`;


const ShopeeAuth: React.FC = () => {
  const [token, setToken] = useState("");
  const [searchParams] = useSearchParams();

  const code = searchParams.get("code");
  const shopId = searchParams.get("shop_id");

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
      console.log(data)
      localStorage.setItem("logo", data.response.shop_logo)
      window.dispatchEvent(new CustomEvent("logoUpdate", { detail: localStorage.getItem("logo") }));
      
    } catch (error) {
      console.error("Erro ao buscar perfil:", error);
      alert("Erro ao buscar perfil");
    }
  };

  return (
    <div>
      <Header/>
      <CardsContainer>
        <CardLink 
          img="https://cdn.awsli.com.br/800x800/2015/2015798/produto/354645871/shoppe--2--mvj1hgvttt.png" 
          store="Shopee" 
          description="Conecte sua loja da shopee para controlar as devolucoes"
        />
      </CardsContainer>
    </div>
  );
};

export default ShopeeAuth;
