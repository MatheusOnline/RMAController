import  { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { Page, ContainerDivision, ContainerDetails, ReturnHisto, CardDetail, HeaderProfile, BodyProfile,
       ImgPortrait, CardContent, Line, ContainerReason,CardProduct ,ProductImg, ProductContent, FlexLine,
       ButtonPrimary, ButtonSegundary, ContainerButtons, Modal, Topic, BuyerVideo } from "./style";
       
import { GlobalStyle } from "../../styles/GlobalStyle";
import Header from "../../components/header/header";

//##### FUNCOES UTILS #####//
import translateStatus from "../../utils/translateStatus"; 
import translateReason from "../../utils/translateReason";

function DetailPage(){
    const [searchParams] = useSearchParams();
    const return_sn = searchParams.get("id");
    const [datas, setDatas] = useState<FormattedData | null>(null);


    interface ReturnData {
        buyerVideos: {
            thumbnail_url: string;
            video_url: string;
            _id: string;
        }[];
        create_time: string;
        item: {
            images: string[];
            item_id: string;
            item_price: string;
            amount: string;
            name: string;
        }[];
        order_sn: string;
        reason: string;
        return_sn: string;
        shop_id: string;
        status: string;
        text_reason: string;
        tracking_number: string;
        user: {
            portrait: string;
            username: string;
            _id: string;
        };
        _id: string;
    }

    interface ReturnItem {
        name: string;
        images: string[];
        item_price: string;
        amount: string;
    }

    interface BuyerVideo {
        thumbnail_url: string;
        video_url: string;
    }

    interface FormattedData {
        buyerName: string;
        portrait: string;
        id_order: string;
        id_request: string;
        reason: string;
        status: string;
        text_reason: string;
        dateCreated: string;
        items: ReturnItem[];
        buyervideos: BuyerVideo[];
    }
    


    async function CallSeachReturn(){
        try{
            
            const res = await fetch(`https://rmabackend-zuvt.onrender.com/return/seach`,
               {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({return_sn}),
                });
            const json: { data: ReturnData; succeso: boolean } = await res.json();
            const formatted = {
                buyerName: json.data.user?.username || "Desconhecido",
                portrait: json.data.user?.portrait || "https://www.transparentpng.com/download/user/gray-user-profile-icon-png-fP8Q1P.png",
                id_order: json.data.order_sn || "",
                id_request: json.data.return_sn || "",
                reason: translateReason(json.data.reason) || "",
                status: translateStatus(json.data.status) || "",
                text_reason: json.data.text_reason || "",
                dateCreated: String(new Date(Number(json.data.create_time) * 1000).toLocaleDateString("pt-BR")),
                items: json.data.item.map((i: any) => ({
                    name: i.name || "",
                    images: i.images || "" ,
                    item_price: i.item_price || "",
                    amount: i.amount || ""
                })),
                buyervideos: (json.data.buyerVideos || []).map((i: any) => ({
                    thumbnail_url: i.thumbnail_url || "",
                    video_url: i.video_url || ""
                }))

            }
                
        
           setDatas(formatted);

       
        }catch(error){
            alert(error)
        }

    }

     useEffect(() => {
       CallSeachReturn()
    }, []);

    
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
                            <p>ID Pedido: {datas?.id_order}</p>
                            <p>|</p>
                            <p>ID Solicitação: {datas?.id_request}</p>
                        </HeaderProfile>
                        <Line />
                        <BodyProfile>
                            <ImgPortrait src={datas?.portrait} alt="" />
                            <p>{datas?.buyerName}</p>
                        </BodyProfile>
                    </CardDetail>
                    
                    {/*CONTAINER DOS DADOS DA DEVOLUÇAO*/}
                    <CardDetail>
                        <ContainerReason>
                            <Topic>Status do rembolso: { datas?.status}</Topic>
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
                            <Topic>Motivo do comprador: {datas?.reason}</Topic>
                            <CardContent>
                                <p>{datas?.text_reason}</p>
                                <BuyerVideo>
                                    {datas?.buyervideos.map((video, index) =>
                                        <img
                                            key={index}
                                            src={video.thumbnail_url}
                                            onClick={() => openModal(`${video.thumbnail_url}`)}
                                            alt="miniatura"
                                        />
                                    
                                    
                                    )}
                                    
                                </BuyerVideo>
                            </CardContent>
                        </ContainerReason>                        
                    </CardDetail>

                    {/*CONTAINER DOS PRODUTOS DA DEVOLUÇAO */}
                    <CardDetail>
                        <Topic>Items da devolução</Topic>

                        {datas?.items.map((product, index) => (
                        <CardProduct key={index}>
                            <ProductImg src={product.images[0]} alt={product.name} />
                            <ProductContent>
                                <FlexLine>
                                    <p>{product.name}</p>
                                    <p>R${product.item_price}</p>
                                </FlexLine>
                                <div>
                                    <p>Quantidade: {product.amount}</p>
                                </div>
                        </ProductContent>
                        </CardProduct>
                        ))}
                    </CardDetail>

                </ContainerDetails>
                
                

                <ReturnHisto>

                </ReturnHisto>
            </ContainerDivision>
        </Page>

    )
}

export default DetailPage;