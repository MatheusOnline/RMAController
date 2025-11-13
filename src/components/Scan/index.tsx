import { useEffect, useRef, useState } from "react";
import { BrowserQRCodeReader } from "@zxing/library";

interface ScanProps {
  onResult: (text: string) => void;
}

function Scan({ onResult }: ScanProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isScanning, setIsScanning] = useState(true);

  useEffect(() => {
    const codeReader = new BrowserQRCodeReader();
    let timeoutId: NodeJS.Timeout;

    const startScan = async () => {
      if (!videoRef.current) return;

      try {
        const result = await codeReader.decodeOnceFromVideoDevice(undefined, videoRef.current);
        if (result) {
          onResult(result.getText());
          setIsScanning(false);
          return;
        }
      } catch (err: any) {
        // Ignora erros de "não encontrado"
        if (err.name !== "NotFoundException") {
          console.error("Erro ao ler QR:", err);
        }
      }

      // agenda a próxima leitura em 4 segundos
      if (isScanning) {
        timeoutId = setTimeout(startScan, 8000);
      }
    };

    startScan();

    return () => {
      setIsScanning(false);
      clearTimeout(timeoutId);
      codeReader.reset();
    };
  }, [isScanning, onResult]);

  return <video ref={videoRef} style={{ width: "100%", borderRadius: "8px" }} />;
}

export default Scan;
