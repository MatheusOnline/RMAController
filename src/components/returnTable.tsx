import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// --- Styled Components ---
const WrapTable = styled.div`
  width: 80%;
  background-color: #ffffff;
  padding: 24px 40px;
  margin: 40px auto;
  box-sizing: border-box;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const Title = styled.h1`
  color: #212121;
  font-size: 26px;
  font-weight: 600;
`;

const Search = styled.input`
  padding: 10px 14px;
  width: 250px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 15px;
  outline: none;
  transition: all 0.2s;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.2);
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-family: 'Roboto', sans-serif;
`;

const HeadT = styled.tr`
  background-color: #f5f5f5;
  height: 48px;
  font-weight: 600;
  color: #333;
`;

const Th = styled.th`
  padding: 12px;
  border-bottom: 2px solid #e9e9e9;
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #e9e9e9;
  color: #444;
  font-size: 15px;

  &:last-child {
    text-align: center;
  }
`;

const Row = styled.tr`
  transition: background 0.2s ease;
  &:hover {
    background-color: #f1f7ff;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 25px;
  border: 1px solid blue;
  background-color: transparent;
  border-radius: 6px;
  &:hover {
    cursor: pointer;
  }
`;

const Buttoninclude = styled(Link)`
  width: 200px;
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

const ContainerButton = styled.div`
  display: flex;
  gap: 10px;
`;

// --- Componente Principal ---
function ReturnTable() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState<any[]>([]);

  // 🔹 Busca dados do backend
  useEffect(() => {
    const fetchRmas = async () => {
      try {
        const response = await fetch("https://rmabackend-zuvt.onrender.com/rma");
        if (!response.ok) {
          throw new Error("Erro ao buscar RMAs");
        }
        const result = await response.json();
        // O backend retorna { returns: [ ... ] }
        setData(result.returns);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchRmas();
  }, []);

  // 🔹 Filtro por ID
  const filtered = data.filter((item) =>
    item.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <WrapTable>
      <Header>
        <Title>Lista completa de RMA</Title>
        <ContainerButton>
          <Buttoninclude to={"leitor"}>Incluir manualmente</Buttoninclude>
          <Search
            type="text"
            placeholder="Buscar por Id..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </ContainerButton>
      </Header>

      <Table>
        <thead>
          <HeadT>
            <Th>Id</Th>
            <Th>Motivo</Th>
            <Th>Status</Th>
            <Th>Data da abertura</Th>
            <Th>Ação</Th>
          </HeadT>
        </thead>
        <tbody>
          {filtered.map((item) => (
            <Row key={item._id}>
              <Td>{item.id}</Td>
              <Td>{item.motivo}</Td>
              <Td>{item.status}</Td>
              <Td>{item.data}</Td>
              <Td>
                <Button>Ver</Button>
              </Td>
            </Row>
          ))}
        </tbody>
      </Table>
    </WrapTable>
  );
}

export default ReturnTable;
