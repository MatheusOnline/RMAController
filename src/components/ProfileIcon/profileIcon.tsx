import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { ContainerProfile, ImgIconProfile, ShopDatas, NameShop, StatusShop, ConnectedButton } from "./style"

import { VscDebugDisconnect } from "react-icons/vsc";

function ProfileIcon(){
    const navigate = useNavigate();

    const [connected, setConnected] = useState(!!localStorage.getItem("shop_id"));
    const [nameShop, setNameShop] = useState(localStorage.getItem("nameShop") || "");
    const [logoShop, setLogoShop] = useState(localStorage.getItem("logoShop") || "");

    useEffect(() => {
        function updateShop() {
            setConnected(!!localStorage.getItem("shop_id"));
            setNameShop(localStorage.getItem("nameShop") || "");
            setLogoShop(localStorage.getItem("logoShop") || "");
        }

        window.addEventListener("shopConnected", updateShop);

        return () => {
            window.removeEventListener("shopConnected", updateShop);
        };
    }, []);

    function ConnectShop(){
        navigate("/auth");
    }

    return(
        <ContainerProfile>
            {!connected && (
                <ConnectedButton onClick={ConnectShop}>
                    <VscDebugDisconnect color="White"/> Conectar Loja
                </ConnectedButton>
            )}

            {connected && (
                <>
                    <ImgIconProfile alt="Logo da loja" src={logoShop} />
                    <ShopDatas>
                        <NameShop>{nameShop}</NameShop>
                        <StatusShop>Conectado</StatusShop>
                    </ShopDatas>
                </>
            )}
        </ContainerProfile>
    )
}

export default ProfileIcon;
