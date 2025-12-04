import { useState, useEffect } from "react"

import { ContainerProfile, ImgIconProfile, ShopDatas, NameShop, StatusShop } from "./style"





function ProfileIcon(){


    const [nameShop, setNameShop] = useState(localStorage.getItem("user_name") || "");
    

    useEffect(() => {
        function updateShop() {
            setNameShop(localStorage.getItem("user_name") || "");
            
        }
        updateShop(); 
        window.addEventListener("shopConnected", updateShop);

        window.addEventListener("shopConnected", updateShop);
        return () => window.removeEventListener("shopConnected", updateShop);
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
