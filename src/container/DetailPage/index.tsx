import  { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { Page, ContainerDivision, ContainerDetails, ReturnHisto, CardDetail, HeaderProfile, BodyProfile,
       ImgPortrait, CardContent, Line, ContainerReason,CardProduct ,ProductImg, ProductContent, FlexLine,
       ButtonPrimary, ButtonSegundary, ContainerButtons, Modal, Topic, BuyerVideo } from "./style";
import { GlobalStyle } from "../../styles/GlobalStyle";
import Header from "../../components/header/header";
import { error } from "console";
function DetailPage(){
    const [searchParams] = useSearchParams();
    const return_sn = searchParams.get("id");


    async function CallSeachReturn(){
        try{
            const route = import.meta.env.ROUTE_BACKEND
            const res = await fetch(`${route}/return/seach`,
               {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({return_sn}),
                });
            const data = await res.json();
            console.log(data)
        }catch(erro){
            alert(error)
        }

    }

     useEffect(() => {
       CallSeachReturn()
    }, []);

    const test = [
    {
        portrait: "http://mms.img.susercontent.com/br-11134233-7r98o-m83jwszjfboxc8",
        buyerName: "elizgranetto",
        id_order: "251017BUP2PEHK",
        id_request: "2510310GD39JGUB",
        productImg: "http://mms.img.susercontent.com/br-11134207-7r98o-m5vhvcljjts5f7",
        productDescript: "Cama pet confortável estofada elegante - PROMOÇÃO IMPERDIVEL",
        reason: "ITEM_MISSING",
        text_reason: "Descrição consta KIT COM *2* POLTRONAS, quando recebi o pacote só havia 1 dentro. Sendo que, paguei o valor das 2",
        status: "ACCEPTED",
        item_price: "36,50",
        amount: "2",
        dateCreated: "20/10/25",
        buyerVideos: {
            thumbnail_url: "https://cf.shopee.com.br/file/br-11134004-81z1k-mgec5b3go0ec67",
            video_url: "",
        },

    }];
    
    const [modalOpen, setModalOpen] = useState(false);
    const [imgSrc, setImgSrc] = useState<string>("");

    const openModal = (src: string) => {
        setImgSrc(src);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setImgSrc("");
    };
  
    
    return(
        <Page>
            <GlobalStyle/>
            <Header/>

            {modalOpen && (
                <Modal onClick={closeModal}>
                <span onClick={closeModal}>&times;</span>
                <img
                    src={imgSrc}
                    alt="ampliada"
                    onClick={(e) => e.stopPropagation()} // evita fechar ao clicar na imagem
                />
                </Modal>
            )}

            <ContainerDivision>
                <ContainerDetails>
                     {/*CONTAINER DOS DADOS DO COMPRADOR*/}
                    <CardDetail>
                        <HeaderProfile>
                            <p>ID Pedido: {test[0].id_order}</p>
                            <p>|</p>
                            <p>ID Solicitação: {test[0].id_request}</p>
                        </HeaderProfile>
                        <Line />
                        <BodyProfile>
                            <ImgPortrait src={test[0].portrait} alt="" />
                            <p>{test[0].buyerName}</p>
                        </BodyProfile>
                    </CardDetail>
                    
                    {/*CONTAINER DOS DADOS DA DEVOLUÇAO*/}
                    <CardDetail>
                        <ContainerReason>
                            <Topic>Status do rembolso: {test[0].status}</Topic>
                            <CardContent>
                                <p>
                                    A Shopee aprovou o reembolso de R$59,98 para o comprador. Caso não concorde, você pode abrir uma Disputa até 06-11-2025.
                                </p>
                                <ContainerButtons>
                                    <ButtonPrimary>Aceitar</ButtonPrimary>
                                    <ButtonSegundary>Disputar</ButtonSegundary>
                                </ContainerButtons>
                            
                            </CardContent>
                        </ContainerReason>
                    </CardDetail>
                    
                     {/*CONTAINER DO MOTIVO DA DEVOLUÇAO*/}
                    <CardDetail>
                        <ContainerReason>
                            
                            <Topic>Motivo do comprador: {test[0].reason}</Topic>
                            <CardContent>
                                <p>{test[0].text_reason}</p>
                                <BuyerVideo>
                                   <img
                                        src={test[0].buyerVideos.thumbnail_url}
                                        onClick={() => openModal(test[0].buyerVideos.thumbnail_url)}
                                        alt="miniatura"
                                    />
                                    <img
                                        src="https://placehold.co/200"
                                        onClick={() => openModal("https://placehold.co/200")}
                                        alt="miniatura"
                                    />
                                </BuyerVideo>
                            </CardContent>
                        </ContainerReason>

                        <ContainerReason>

                        </ContainerReason>
                    </CardDetail>

                    {/*CONTAINER DOS PRODUTOS DA DEVOLUÇAO */}
                    <CardDetail>
                        <Topic>Items da devolução</Topic>

                        <CardProduct>
                            <ProductImg src={test[0].productImg} alt="" />
                            <ProductContent>
                                <FlexLine>
                                    <p>{test[0].productDescript}</p>
                                    <p>R${test[0].item_price}</p> 
                                </FlexLine>
                                <div>
                                    <p>Quantidade: {test[0].amount}</p>
                                </div>
                            </ProductContent>
                        </CardProduct>

                        <CardProduct>
                            <ProductImg src={test[0].productImg} alt="" />
                            <ProductContent>
                                <FlexLine>
                                    <p>{test[0].productDescript}</p>
                                    <p>R${test[0].item_price}</p> 
                                </FlexLine>
                                <div>
                                    <p>Quantidade: {test[0].amount}</p>
                                </div>
                            </ProductContent>
                        </CardProduct>
                    </CardDetail>

                </ContainerDetails>
                
                

                <ReturnHisto>

                </ReturnHisto>
            </ContainerDivision>
        </Page>

    )
}

export default DetailPage;