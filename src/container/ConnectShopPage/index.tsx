import { useEffect,useState } from "react";
import { useSearchParams } from "react-router-dom";

import CardLink from "../../components/Cards/cardLink";
import { Page, CardsContainer, DetailContainer, HeaderDetail, VerifildIcon, ItemList, MainContainer } from "./style";

const ShopeeAuth: React.FC = () => {
  interface Shop {
    name: string
  }

  const [searchParams] = useSearchParams();
  const [shops, setShops] = useState<Shop[]>([])
  const code = searchParams.get("code");
  const shopId = searchParams.get("shop_id");

   useEffect(() => {
    const user_id = localStorage.getItem("user_id")

    if(user_id)
    listshop(user_id)

    


    if (code && shopId) getTokenShopLevel();
  }, [code, shopId]);

  async function listshop(user_id:String) {
      try{
        const response = await fetch("http://localhost:5000/user/shoplist",{
          method: "POST",
          headers: {"Content-Type": "application/json" },
          body: JSON.stringify({user_id})
        })

        const datas = await response.json();
        setShops(datas.stores)
        

      }catch(error){
        alert(error)
      }
  }



  const getTokenShopLevel = async () => {
    const user_id = localStorage.getItem("user_id")
    try {
      const res = await fetch(`https://rmabackend-zuvt.onrender.com/token/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, shop_id: shopId,user_id })
      });
      const data = await res.json();
      console.log(data)
      localStorage.setItem("token", data.access_token);

      GetProfile();

      if (shopId) {
        localStorage.setItem("shop_id", shopId);
      }
    } catch {
      alert("Erro ao conectar a loja");
    }
  };

 
  const GetProfile = async () => {
    try {
      const res = await fetch(`https://rmabackend-zuvt.onrender.com/shop/datas`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ shop_id: shopId })
      });

      const data = await res.json();
      localStorage.setItem("logoShop", data.response.shop_logo);
      localStorage.setItem("nameShop", data.response.shop_name);

      window.dispatchEvent(new Event("shopConnected"));
    } catch {
      alert("Erro ao buscar perfil");
    }
  };

  
  {/**
  if(shops.length > 0 ){
    return(
      
        
      
    )
  }
 */}

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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {shops.map((shop, i) => (
            <div key={i} className="p-4 border rounded-lg shadow">
              <h2 className="text-lg font-bold">{shop.name}</h2>
              
            </div>
          ))}
        </div>
  </Page>
);
};

export default ShopeeAuth;
