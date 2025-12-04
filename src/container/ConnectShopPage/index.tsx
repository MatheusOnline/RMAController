import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import CardLink from "../../components/Cards/cardLink";
import { CardShop, CardAddShop } from "../../components/cardShop/cardShop";
import Load from "../../components/Load";
import {
  Page,
  CardsContainer,
  DetailContainer,
  HeaderDetail,
  VerifildIcon,
  ItemList,
  MainContainer,
  ShopGrid,
  PageContainer,
  Header,
  Title,
  Subtitle
} from "./style";

interface Shop {
  name: string;
  img: string;
}

const ShopeeAuth: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [shops, setShops] = useState<Shop[]>([]);
  const code = searchParams.get("code");
  const shopId = searchParams.get("shop_id");
  const [loading, setLoading] = useState(true);

  const user_id = localStorage.getItem("user_id");

  useEffect(() => {
  if (!user_id) return;

  async function init() {
    if (code && shopId && user_id) {
      await getTokenShopLevel(code, shopId, user_id);
    }

    if(user_id)
    await listshop(user_id);

    setLoading(false);
  }

  init();
}, [code, shopId, user_id]);


  async function listshop(user_id: string) {
    try {
      const response = await fetch("https://rmabackend-zuvt.onrender.com/user/shoplist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id })
      });

      if (!response.ok) throw new Error("Erro ao buscar lojas");

      const data = await response.json();
      setShops(data.stores || []);
    } catch (error) {
      console.error(error);
      alert("Erro ao buscar lojas");
    }
  }

  const getTokenShopLevel = async (code: string, shop_id: string, user_id: string) => {
    try {
      const res = await fetch(`https://rmabackend-zuvt.onrender.com/token/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, shop_id, user_id })
      });

      if (!res.ok) throw new Error("Erro ao gerar token");

      const data = await res.json();

      if (data?.access_token) {
        localStorage.setItem("token", data.access_token);
        localStorage.setItem("shop_id", shop_id);

        await GetProfile(shop_id);
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao conectar a loja");
    }
  };

  const GetProfile = async (shop_id: string) => {
    try {
      const res = await fetch(`https://rmabackend-zuvt.onrender.com/shop/datas`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ shop_id })
      });

      if (!res.ok) throw new Error("Erro ao buscar perfil");

      const data = await res.json();

      if (data?.response) {
        localStorage.setItem("logoShop", data.response.shop_logo || "");
        localStorage.setItem("nameShop", data.response.shop_name || "");

        window.dispatchEvent(new Event("shopConnected"));
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao buscar perfil");
    }
  };

  if (loading) return <PageContainer><Load/></PageContainer>; 

  if (shops.length > 0) {
    return (
      <PageContainer>
        <Header>
          <div>
            <Title>Suas lojas</Title>
            <Subtitle>Gerencie suas lojas conectadas à sua conta</Subtitle>
          </div>
        </Header>

        <ShopGrid>
          {shops.map((shop, i) => (
            <CardShop key={i} name={shop.name} status="online" img={shop.img}/>
          ))}

          <CardAddShop />
        </ShopGrid>
      </PageContainer>
    );
  }

  return (
    <Page>
      <MainContainer>
        <DetailContainer>
          <HeaderDetail>
            <h1>Conectar loja</h1>
            <p>Para começar, conecte sua loja Shopee.</p>
            <p>Após a conexão, você poderá controlar devoluções facilmente.</p>
          </HeaderDetail>

          <ul>
            <ItemList><VerifildIcon />Veja todas as devoluções</ItemList>
            <ItemList><VerifildIcon />Atualização automática</ItemList>
            <ItemList><VerifildIcon />Integração segura</ItemList>
            <ItemList><VerifildIcon />Controle simplificado</ItemList>
          </ul>
        </DetailContainer>

        <CardsContainer>
          <CardLink
            img="https://cdn.awsli.com.br/800x800/2015/2015798/produto/354645871/shoppe--2--mvj1hgvttt.png"
            store="Shopee"
            description="Clique aqui"
          />
        </CardsContainer>
      </MainContainer>
    </Page>
  );
};

export default ShopeeAuth;
