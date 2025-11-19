
import { ContainerRadios, ItemRadios, InputRadio, LabelRadio } from "./style";

function RadioStatus({onSelect} :any) {

  
  const statuses = ["TODAS", "SOLICITADO", "EM TRANSPORTE", "RECEBIDO", "FINALIZADO", "EM DISPUTA"];

  return (
    <ContainerRadios>
      {statuses.map((s) => (
        <ItemRadios key={s}>
          <InputRadio
            type="radio"
            id={s}
            name="status"
            
            onChange={() => onSelect(s)}
          />
          
          <LabelRadio htmlFor={s}>{s}</LabelRadio>
        </ItemRadios>
      ))}
      
    </ContainerRadios>
  );
}

export default RadioStatus;
