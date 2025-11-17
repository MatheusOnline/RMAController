import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { Page, ContainerScan, ButtonExit, ContainerContent,Wrapper,ConfimButton,ContainerReason, TextArea, ContainerObservation,ContainerItem, ItemDatas, CotainerDatasw, ImgItem, BuyerVideo } from "./style"

//####FUNCOES#####
import translateReason from "../../utils/translateReason";
import translateStatus from "../../utils/translateStatus";

//####COMPONENTES####
import Scan from "../../components/Scan"
import ImageUploader from "../../components/ImagemUpload";


function ScanerPage(){
  const navigate = useNavigate();

  const [code, setCode] = useState("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [Observation, setObservation] = useState("")

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
        shop_name: string;
        return_sn: string;
        status: string;
        reason: string;
        text_reason: string;
        item: ReturnItem[];
        buyervideos: BuyerVideo[];
    }
  const [datas, setDatas] = useState<FormattedData | null>(null);

  const handleImage = (file: File) => {
    setSelectedImage(file);
    console.log("Imagem selecionada:", file);
  };

  useEffect(() => {
    if (code) {
      SeachReturn(code); // chama a função quando code deixa de ser vazio
    }
  }, [code]);

  async function SeachReturn(code:String){
    try{
        
        const response = await fetch("https://rmabackend-zuvt.onrender.com/return/scan", {
          method: "POST",
          headers: {
            "Content-Type": "application/json", 
          },
          body: JSON.stringify({ tracking_id: code }),
        });

        const result = await response.json();
        console.log("RESPOSTA DO BACKEND:", result);
        if (!result.success) {
          alert(result.error || "Devolução não encontrada.");
          return; // <-- PARA AQUI
        }
        const formatted = {
              shop_name: result.shop_name || "",
              return_sn: result.data.return_sn || "",
              reason: translateReason(result.data.reason) || "",
              status: translateStatus(result.data.status) || "",
              text_reason: result.data.text_reason || "",
              item: result.data.item.map((i: any) => ({
                  name: i.name || "",
                  images: i.images || "" ,
                  item_price: i.item_price || "",
                  amount: i.amount || ""
              })),
              buyervideos: (result.data.buyer_videos || []).map((i: any) => ({
                    thumbnail_url: i.thumbnail_url || "",
                    video_url: i.video_url || ""
                }))
          }

        setDatas(formatted)
        console.log(formatted)
        
    }catch(error){
      console.log(error)
    }
  }

  async function HandleSubmit() {
    const formData = new FormData();
      formData.append("return_sn", "2511120K2WCXS95");
      formData.append("observation", Observation);
      formData.append("imagen", selectedImage || ""); 

      try {
        const response = await fetch("http://localhost:5000/return/finish", {
          method: "POST",
          body: formData,
        });

        const result = await response.json();
        console.log(result.data);
        alert(result.message || "Enviado com sucesso!");
        navigate("/")
      } catch (error) {
        console.error("Erro ao enviar:", error);
        alert("Erro ao enviar os dados");
      }
  }
  return(
    <Page>
      {!code ? (
        <ContainerScan>
          <Scan onResult={(text) => setCode(text)} /> 
           
          <ButtonExit to="/">Parar leitura</ButtonExit>
          
        </ContainerScan>
      ) : (
        <ContainerContent>
          <Wrapper>

            <p>Id Pedido: {datas?.return_sn}</p>
            <p>Vendedor: {datas?.shop_name}</p>
            <br />
            <p>Status da solicitação: {datas?.status}</p>
            <p>Motivo da devolução: {datas?.reason}</p>
            <br />
            <ContainerReason>
              <p>{datas?.text_reason}</p>
            </ContainerReason>
          </Wrapper>
          
          <Wrapper>
            {datas?.buyervideos.map((video, index) =>
                <BuyerVideo>
                    <img
                        key={index}
                        src={video.thumbnail_url}
                        
                        alt="miniatura"
                    />
                    <video controls autoPlay onClick={(e) => e.stopPropagation()}>
                        <source src={video.video_url} type="video/mp4" />
                        Seu navegador não suporta vídeos.
                    </video>
                </BuyerVideo> 

            
            )}            

          </Wrapper>
          
          <Wrapper>
            <ContainerObservation>
              <h4>Observaçao</h4>
              <TextArea 
                placeholder="Adicione uma observaçao " 
                value={Observation} 
                onChange={(e) => setObservation(e.target.value)}>
              </TextArea>
            </ContainerObservation>
          </Wrapper>

          <Wrapper>
            {datas?.item.map((product, index) => (
            <ContainerItem key={index}>
              <ImgItem src={product.images[0]} alt={product.name}/>
              <CotainerDatasw>
                <ItemDatas>
                  <p>{product.name} </p>
                  <p>R${product.item_price}0</p>
                </ItemDatas>
                <p>Quantidade: {product.amount}</p>
              </CotainerDatasw>
            </ContainerItem>
            
              ))}
          </Wrapper>

          <ImageUploader onImageSelect={handleImage} />
          <ConfimButton onClick={HandleSubmit}>Confirmar Envio</ConfimButton>
        </ContainerContent>
      )}
  </Page>
  )
}

export default ScanerPage