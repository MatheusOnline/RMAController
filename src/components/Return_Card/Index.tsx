import { 
  HeaderCard, 
  ProfileImg, 
  CardContainer, 
  CardContent, 
  ProductSection, 
  ProductImg, 
  InfoSection, 
  Label, 
  Value, 
  ActionLink 
} from "./style";

interface ReturnData {
  portrait: string;
  buyerName: string;
  id_order: string;
  id_request: string;
  productImg: string;
  productDescript: string;
  reason: string;
  status: string;
  dateCreated: string;
  item_price: string;
}

interface Props {
  datas: ReturnData;
}

function ReturnCard({ datas }: Props) {
  return (
    <CardContainer>
      <HeaderCard>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <ProfileImg src={datas.portrait} />
          <p><strong>{datas.buyerName}</strong></p>
          <p style={{ color: "#aaa" }}>|</p>
          <p>ID Pedido: {datas.id_order}</p>
          <p style={{ color: "#aaa" }}>|</p>
          <p>ID Solicitação: {datas.id_request}</p>
        </div>
      </HeaderCard>

      <CardContent>
        <ProductSection>
          <ProductImg src={datas.productImg} alt="Produto" />
          <div>
            <p><strong>{datas.productDescript}</strong></p>
            <p style={{ color: "#666", fontSize: "13px" }}>{datas.reason}</p>
          </div>
        </ProductSection>

        <InfoSection>
          <div>
            <Label>Status:</Label>
            <Value>{datas.status}</Value>
          </div>
          <div>
            <Label>Valor:</Label>
            <Value>{datas.item_price}</Value>
          </div>
          <div>
            <Label>Data:</Label>
            <Value>{datas.dateCreated}</Value>
          </div>
          <ActionLink to={`/return/detail?id=${datas.id_request}`}>Ver detalhes</ActionLink>
        </InfoSection>
      </CardContent>
    </CardContainer>
  );
}

export default ReturnCard;
