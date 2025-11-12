import {  useRef, useEffect } from "react";
import { BrowserQRCodeReader } from "@zxing/library";

interface ScanProps {
  onResult: (code: string) => void; // callback para retornar o resultado
}


function Scan ({ onResult }: ScanProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  
  useEffect(() => {
    const codeReader = new BrowserQRCodeReader();

    if (videoRef.current) {
      codeReader
        .decodeFromVideoDevice(null, videoRef.current, (result, err) => {
          if (result) {
            onResult(result.getText());
            codeReader.reset(); // Para a leitura após ler o QR
          }
          if (err && err.name !== "NotFoundException") {
            console.error("Erro ao ler QR:", err);
          }
        })
        .catch((err) => console.error("Erro ao iniciar câmera:", err));
    }

    return () => {
      codeReader.reset(); // Limpa a câmera quando o componente desmonta
    };
  }, []);

  return (
    <div style={{width: "100%"}}>
      <video
        ref={videoRef}
        style={{ width: "100%", borderRadius: "8px" }}
      />
    </div>
  );
};

export default Scan;
