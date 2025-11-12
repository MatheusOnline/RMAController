import { useRef, useState } from "react";
import { ContainerUploader,Button } from "./style";

interface ImageUploaderProps {
  onImageSelect: (file: File) => void;
}

function ImageUploader({ onImageSelect }: ImageUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file));
    onImageSelect(file);
  };

  const openPicker = () => {
    fileInputRef.current?.click();
  };

  return (
    <ContainerUploader>
      {/* input invisível, mas essencial */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        capture="environment"  // 🔥 abre câmera no celular (traseira)
        onChange={handleChange}
        style={{ display: "none" }}
      />

      <Button onClick={openPicker}>Selecione uma foto se tiver avaria</Button>

      {preview && (
        <div style={{ marginTop: "10px" }}>
          <img
            src={preview}
            alt="Prévia"
            style={{
              width: "20%",
              height: "auto",
              borderRadius: "8px",
              border: "2px solid #ccc",
            }}
          />
        </div>
      )}
    </ContainerUploader>
  );
}

export default ImageUploader;
