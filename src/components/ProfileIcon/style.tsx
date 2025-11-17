import styled from "styled-components";

export const ContainerProfile = styled.div`
    width: 10%;
    height: 90%;
    padding: 12px;
    box-sizing: border-box;
    display: flex;
    gap: 5%;

    @media (max-width: 768px) {
        width: 35%;
    }
`

export const ImgIconProfile = styled.img`
    

` 
export const ShopDatas = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    
`
export const NameShop = styled.p`
    width: 100%;
    color: #FFFFFF;
    font-size: 18px;
    white-space: nowrap;      /* não quebra linha */
    overflow: hidden;         /* esconde o que passar */
    text-overflow: ellipsis;  /* coloca "…" no final */
`
export const StatusShop = styled.p`
    color: #1afc1a;
`
export const ConnectedButton = styled.button`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #77cfdf;
    border-radius: 6px;
    background-color:transparent ;
    
    color: #FFFFFF;
    font-size: 16px;
    cursor: pointer;

`