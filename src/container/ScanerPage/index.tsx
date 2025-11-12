import { useState } from "react"
import { Page, ContainerScan, ButtonExit, ContainerContent } from "./style"


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
          <ImageUploader onImageSelect={handleImage} />

        </ContainerContent>
      )}
  </Page>
  )
}

export default ScanerPage