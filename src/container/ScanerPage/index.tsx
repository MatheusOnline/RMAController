import { useState } from "react"
import { Page, ContainerScan, ButtonExit, ContainerContent,Wrapper,ConfimButton,ContainerReason, TextArea, ContainerObservation,ContainerItem, ItemDatas, CotainerDatasw,ImgItem } from "./style"


//####COMPONENTES####
import Scan from "../../components/Scan"
import ImageUploader from "../../components/ImagemUpload";

function ScanerPage(){
  const [code, setCode] = useState("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  
  const handleImage = (file: File) => {
    setSelectedImage(file);
    console.log("Imagem selecionada:", file);
  };

  console.log(selectedImage)
  return(
    <Page>
      {!code ? (
        <ContainerScan>
          <Scan onResult={(text) => setCode(text)} /> 
           
          <ButtonExit>Parar leitura</ButtonExit>
          
        </ContainerScan>
      ) : (
        <ContainerContent>
          <Wrapper>
            <p>Id Pedido: FH12481NB4094</p>
            <br />
            <p>status da solicitaçao: Concluida </p>
            <p>Motivo da devoluçao: Item faltando</p>
            <br />
            <ContainerReason>
             <p> Recebi um produto errado (outro item, ou item certo mas com a cor, tamanho ou modelo errados) </p>
            </ContainerReason>
          </Wrapper>

          <Wrapper>
            <ContainerObservation>
              <h4>Observaçao</h4>
              <TextArea name="" id="" placeholder="Adicione uma observaçao "></TextArea>
            </ContainerObservation>
          </Wrapper>

          <Wrapper>
            <ContainerItem>
              <ImgItem src="https://placehold.co/200x200" alt="" />
              <CotainerDatasw>
                <ItemDatas>
                  <p>Poltronana nina </p>
                  <p>R$45,90</p>
                </ItemDatas>
                <p>Qunatidade: 2</p>
              </CotainerDatasw>
            </ContainerItem>
          </Wrapper>

          <ImageUploader onImageSelect={handleImage} />
          <ConfimButton>Confirmar Envio</ConfimButton>
        </ContainerContent>
      )}
  </Page>
  )
}

export default ScanerPage