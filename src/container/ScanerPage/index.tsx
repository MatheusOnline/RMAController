import { useState } from "react"
import { Page, ContainerScan, ButtonExit, ContainerContent,Wrapper,ConfimButton,ContainerReason, TextArea, ContainerObservation } from "./style"


//####COMPONENTES####
import Scan from "../../components/Scan"
import ImageUploader from "../../components/ImagemUpload";

function ScanerPage(){
  const [code, setCode] = useState("12424");
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
              <TextArea name="" id=""></TextArea>
            </ContainerObservation>
          </Wrapper>
          <ImageUploader onImageSelect={handleImage} />
          <ConfimButton>Confirmar Envio</ConfimButton>
        </ContainerContent>
      )}
  </Page>
  )
}

export default ScanerPage