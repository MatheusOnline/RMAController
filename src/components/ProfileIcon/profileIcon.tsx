import { ContainerProfile, ImgIconProfile, ShopDatas, NameShop, StatusShop } from "./style"

function ProfileIcon(){
    return(
        <ContainerProfile>
            <ImgIconProfile alt="Logo da loja" src="https://cf.shopee.com.br/file/br-11134216-7r98o-ltfmk6umvqpr5a"/>
            <ShopDatas>
                <NameShop>ShopeBem</NameShop>
                <StatusShop>Conectado</StatusShop>
            </ShopDatas>
        </ContainerProfile>
    )

}

export default ProfileIcon