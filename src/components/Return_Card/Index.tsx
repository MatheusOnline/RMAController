import { HeaderCard, ProfileImg, Card } from "./style";



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
}

interface Props {
  datas: ReturnData;
}

function ReturnCard({ datas }: Props) {
  return (
    <Card>
        <HeaderCard style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <ProfileImg src={datas.portrait} alt="Imagem de perfil" />
          <p>{datas.buyerName}</p>
          <p>|</p>
          <p>{datas.id_order}</p>
          <p>{datas.id_request}</p>
        </HeaderCard>
        <td>
            <img src={datas.productImg} alt="Produto" style={{ width: 60, height: 60, objectFit: "cover" }} />
        </td>
        <td>{datas.productDescript}</td>
        <td>{datas.reason}</td>
        <td>{datas.status}</td>
        <td>{datas.dateCreated}</td>
    </Card>
  );
}

export default ReturnCard;
