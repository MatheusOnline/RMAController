import {  useEffect } from "react";
import { useSearchParams } from "react-router-dom";


import CardLink from "../../components/Cards/cardLink";
import { Page, CardsContainer, DetailContainer,HeaderDetail } from "./style";




const ShopeeAuth: React.FC = () => {
  const [searchParams] = useSearchParams();

  const code = searchParams.get("code");
  const shopId = searchParams.get("shop_id");
  

  // 
  // Funçao para gerar o tokem de acesso
  // ele precisa do code e o shop_id quem vem na url
  //
  const getTokenShopLevel = async () => {
    try {
      const res = await fetch(`https://rmabackend-zuvt.onrender.com/token/generate`,  {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, shop_id: shopId })
      });

      //Salva no localStorage o token
      //Pretendo mudar essa rota para o backend (acho que nao precisa do token no front mais)
      const data = await res.json();
      console.log(data)
      localStorage.setItem("token", data.access_token)
      
      GetProfile();

      if (shopId) {
        localStorage.setItem("shop_id", shopId);
      }
    } catch (error) {
      alert("Erro ao conenctar a loja");
    }
  };

  // Busca token quando code e shopId existirem
  useEffect(() => {
    if (code && shopId) getTokenShopLevel();
  }, [code, shopId]);


  // 
  // Busca os dados da loja para o header(Nome e logo)
  // Usa so o shop_Id que ta salvo no local storage
  //
  const GetProfile = async () => {
    try {
      const res = await fetch(`https://rmabackend-zuvt.onrender.com/shop/datas`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ shop_id: shopId })
      });

      const data = await res.json();
      localStorage.setItem("logoShop", data.response.shop_logo)
      localStorage.setItem("nameShop", data.response.shop_name)
      
      window.dispatchEvent(new Event("shopConnected"));
    } catch (error) {
      alert("Erro ao buscar perfil");
    }
  };

  return (
    <Page >
      <DetailContainer>
        <HeaderDetail>
          <h1>Conectar Loha</h1>
          <p>Para começar, conecte sua loja Shopee.</p>
          <p>Após a conexão, você poderá começar a controlar suas devoluçoes de forma facil</p>
        </HeaderDetail>
        <div>
          <ul>
            <li>Veja todas as devoluçoes</li>
            <li>Atualização automática </li>
            <li>Integraçao segura</li>
            <li>Controle simplificado</li>
          </ul>
        </div>
      </DetailContainer>

      <CardsContainer>
        <CardLink 
          img="https://cdn.awsli.com.br/800x800/2015/2015798/produto/354645871/shoppe--2--mvj1hgvttt.png" 
          store="Shopee" 
          description="Conecte sua loja da shopee para controlar as devolucoes"
        />
      </CardsContainer>
    </Page>
  );
};

export default ShopeeAuth;
