import { Img } from "../Cards/cardLink.style";

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
    <tr>
      <td>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Img src={datas.portrait} alt="Imagem de perfil" />
          <p>{datas.buyerName}</p>
          <p>|</p>
          <p>{datas.id_order}</p>
          <p>{datas.id_request}</p>
        </div>
      </td>
      <td>
        <img src={datas.productImg} alt="Produto" style={{ width: 60, height: 60, objectFit: "cover" }} />
      </td>
      <td>{datas.productDescript}</td>
      <td>{datas.reason}</td>
      <td>{datas.status}</td>
      <td>{datas.dateCreated}</td>
    </tr>
  );
}

export default ReturnCard;
