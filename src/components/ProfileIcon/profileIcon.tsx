import { useState } from "react"
import { ContainerProfile, ImgIconProfile, ShopDatas, NameShop, StatusShop, ConnectedButton } from "./style"

import { VscDebugDisconnect } from "react-icons/vsc";

function ProfileIcon(){
   const [Connected, setConnected] = useState(false)
   
    function ConnectShop(){
        setConnected(true)
    }

    return(
        <ContainerProfile>
            {!Connected && (
                <ConnectedButton onClick={ConnectShop}>
                    <VscDebugDisconnect color="White"/> Conectar Loja
                </ConnectedButton>
            )}

            {Connected && (
                <>
                    <ImgIconProfile 
                        alt="Logo da loja" 
                        src="https://cf.shopee.com.br/file/br-11134216-7r98o-ltfmk6umvqpr5a"
                    />

                    <ShopDatas>
                        <NameShop>ShopeBem</NameShop>
                        <StatusShop>Conectado</StatusShop>
                    </ShopDatas>
                </>
            )}
        </ContainerProfile>
    )

}

export default ProfileIcon