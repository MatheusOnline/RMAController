import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { BrowserQRCodeReader } from "@zxing/library";
import { Link } from "react-router-dom";

// --- Styled Components ---
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: 'Roboto', sans-serif;
`;

const Video = styled.video`
  width: 300px;
  height: 300px;
  border: 2px solid #333;
  border-radius: 12px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const Label = styled.label`
  margin: 10px 0 5px;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px;
  border-radius: 6px;
  background-color: #007bff;
  color: white;
  font-weight: 500;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ButtonInclude = styled(Link)`
  margin-top: 10px;
  height: 40px;
  border: 1px solid blue;
  background-color: none;
  border-radius: 6px;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: black;

  &:hover {
    cursor: pointer;
  }
`;

// --- Component ---
const RegistrationLabel: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [qrCode, setQrCode] = useState("");
  const [motivo, setMotivo] = useState("");
  const [dataAtual, setDataAtual] = useState(new Date().toISOString().slice(0, 10));
  const [status, setStatus] = useState("Em Análise");

  useEffect(() => {
  const codeReader = new BrowserQRCodeReader();
  if (videoRef.current) {
    codeReader
      .decodeFromVideoDevice(null, videoRef.current!, (result, err) => {
        if (result) {
          setQrCode(result.getText());
          codeReader.reset(); // Para a leitura após ler o QR
        }
        if (err && !(err.name === "NotFoundException")) {
          console.error("Erro ao ler QR:", err);
        }
      })
      .catch((err) => console.error("Erro ao iniciar câmera:", err));
  }

  return () => codeReader.reset();
}, []);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
        await fetch("https://rmabackend-zuvt.onrender.com/rma", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: qrCode, motivo, data: dataAtual, status })
      });
      
      
      alert("Cadastro realizado com sucesso!");
      setQrCode("");
      setMotivo("");
      setDataAtual(new Date().toISOString().slice(0, 10));
      setStatus("Em Análise");
    } catch (error) {
      console.error(error);
      alert("Erro bao cadastrar RMA");
    }
  };

  return (
    <Container>
      <h2>Leitura de QR Code e Cadastro</h2>
      <Video ref={videoRef} />

      <Form onSubmit={handleSubmit}>
        <Label>ID (QR Code)</Label>
        <Input type="text" value={qrCode} readOnly />

        <Label>Motivo</Label>
        <Input
          type="text"
          value={motivo}
          onChange={(e) => setMotivo(e.target.value)}
          required
        />

        <Label>Data</Label>
        <Input type="date" value={dataAtual} readOnly />

        <Label>Status</Label>
        <Input type="text" value={status} readOnly />

        <Button type="submit">Salvar</Button>
        <ButtonInclude to="/">Cancelar</ButtonInclude>
      </Form>
    </Container>
  );
};

export default RegistrationLabel;
