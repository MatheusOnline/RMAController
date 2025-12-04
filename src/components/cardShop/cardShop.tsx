import CryptoJS from "crypto-js";

import styled from "styled-components";

export const ContainerCard = styled.div`
  width: 100%;
  height: 90px;
  border: 1px solid #125f8b;
  border-radius: 10px;
  background: #fff;
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 10px;
  cursor: pointer;
  transition: 0.25s;
box-sizing: border-box;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0,0,0,0.08);
  }
`
export const ShopImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 6px;
  object-fit: cover;
  background-color: #eee;
`

export const ShopInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ShopName = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #125f8b;
`

export const ShopStatus = styled.span<{ online: boolean }>`
  font-size: 12px;
  margin-top: 4px;
  color: ${props => props.online ? "#2ecc71" : "#e74c3c"};

  `

export const AddButton = styled.button`
  width: 100%;
  height: 90px;
  border: 2px dashed #125f8b;
  border-radius: 10px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #125f8b;
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: rgba(18, 95, 139, 0.05);
  }
`


export const AddIcon = styled.span`
  font-size: 28px;
`  



export function CardShop({ name, status, img }: { name: string, status?: string, img:string }) {
  return (
    <ContainerCard>
      <ShopImage src={img} />

      <ShopInfo>
        <ShopName>{name}</ShopName>
        <ShopStatus online={status === "online"}>
          {status === "online" ? "Online" : "Offline"}
        </ShopStatus>
      </ShopInfo>
    </ContainerCard>
  )
}



export function CardAddShop() {
    const PartnerId = import.meta.env.VITE_PARTNERID
    const key = import.meta.env.VITE_KEY
    const host = import.meta.env.VITE_HOST
    
    
    // Gera URL de autenticação
    function GenerateAuthUrl(){
        const ts = Math.floor(Date.now() / 1000);
        const path = "/api/v2/shop/auth_partner";
        const baseStr = `${PartnerId}${path}${ts}`;
        const sign = CryptoJS.HmacSHA256(baseStr, key).toString(CryptoJS.enc.Hex);
        const url = `${host}${path}?partner_id=${PartnerId}&redirect=https://rma-controller.vercel.app/auth/&timestamp=${ts}&sign=${sign}`;
    
        window.location.href = url;
    };


  return (
    <AddButton onClick={GenerateAuthUrl}>
      <AddIcon>+</AddIcon>
      <span>Adicionar loja</span>
    </AddButton>
  )
}


