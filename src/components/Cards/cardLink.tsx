import { ContainerCard, Img, ContainerClick } from "./cardLink.style";


import CryptoJS from "crypto-js";

interface Datas{
    img: string;
    store: string;
    description: string;
}

function CardLink({img, store, description}:Datas){
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
    
    return(
        <ContainerCard onClick={GenerateAuthUrl}>
            <Img src={img} alt="" />
            <h1>{store}</h1>
            <ContainerClick>
                <p>{description}</p>
            </ContainerClick>
        </ContainerCard>
    )
}

export default CardLink