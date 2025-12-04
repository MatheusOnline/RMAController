import { useState, useEffect } from "react"

import { ContainerProfile, ImgIconProfile, ShopDatas, NameShop, StatusShop } from "./style"





function ProfileIcon(){


    const [nameShop, setNameShop] = useState(localStorage.getItem("shop_name") || "");
    

    useEffect(() => {
        function updateShop() {
            setNameShop(localStorage.getItem("shop_name") || "");
            
        }

        window.addEventListener("shopConnected", updateShop);

        return () => {
            window.removeEventListener("shopConnected", updateShop);
        };
    }, []);

 
    return(
        <ContainerProfile>
           
            <ImgIconProfile />
            <ShopDatas>
                <NameShop>{nameShop}</NameShop>
                <StatusShop>Conectado</StatusShop>
            </ShopDatas>
                
            
        </ContainerProfile>
    )
}

export default ProfileIcon;
