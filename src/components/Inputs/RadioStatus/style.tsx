import styled from "styled-components";

export const ContainerRadios = styled.div`
    width: 30%;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;

`

export const ItemRadios = styled.div`
  display: flex;
  align-items: center;

  input:checked + label {
    background: var(--transparent-color);
    border-color: var(--transparent-color);
    color: #fff; /* opcional */
  }
`;

export const InputRadio = styled.input`
  display: none;
`;
export const LabelRadio = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 6px 10px;
  border: 1px solid var(--item-color);
  border-radius: 20px;
  cursor: pointer;
  user-select: none;

  font-size: 12px;
  color: var(--item-color);

  transition: 0.2s;
`;
