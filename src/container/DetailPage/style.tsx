import styled from "styled-components";

export const Page = styled.main`
    width: 100%;
    height: 1000;

`

export const ContainerDivision = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-top: 20px;
`

export const Topic = styled.h4`
    
    color: #125f8b;
    

`

export const ReturnHisto = styled.div`
    width: 30%;
    height: 100%;
    
    
`

export const ContainerDetails = styled.div`
    width: 55%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

`

export const CardDetail = styled.div`
    width: 100%;
    padding: 12px;
    box-sizing: border-box;
    background-color: #FFFFFF;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

`

export const HeaderProfile = styled.div`
    width: 100%;
    height: 20%;
    box-sizing: border-box;
    background-color: #fefefe;
    display: flex;
    gap: 10px;
    
`

export const BodyProfile = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
    gap: 10px;

`

export const ImgPortrait = styled.img`
    width: 7%;
    border-radius: 50%;
    
`

export const Line = styled.hr`
    border: 1px solid #5a5a5a2b;
`

export const CardContent = styled.div`
    width: 100%;
    height: 40%;
    background-color: #f3f3f3;
    padding: 20px;
    
    box-sizing: border-box;
    
    p{
        color: #5a5a5a;
    }
`

export const ContainerReason = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const BuyerVideo = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    gap: 10px;

    box-sizing: border-box;
    margin-top: 10px;
    
`

export const FlexLine = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
   
    
`

export const CardProduct = styled.div`
    display: flex;
    border-bottom: 2px solid #f3f3f3;
    margin-bottom: 5px;
    `

export const ProductImg = styled.img`
    width: 15%;
`

export  const ProductContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const ContainerButtons = styled.div`
    display: flex;
    gap: 10px;
    justify-content: flex-end;
`

export const ButtonPrimary = styled.button`
    width: 100px;
    height: 40px;
    border-radius: 6px;
    background-color: #125f8b;
    border: 1px solid #116697;
    transition: 0.3s ease;
    color: white;

    &:hover{
        background-color: #134c6d;
        cursor: pointer;
    }
`

export const ButtonSegundary = styled.button`
    width: 100px;
    height: 40px;
    border-radius: 6px;
    background-color: #125f8b45;
    border: 1px solid #116697;
    transition: 0.3s ease;
    color: #125f8b;

    &:hover{
        background-color: #125f8b2d;
        cursor: pointer;
    }
`

export const Modal = styled.div`
    position: fixed;
    display: flex;
    z-index: 10;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    justify-content: center;
    align-items: center;
    
    & img{
        width: 40%;
        
    }
`

export const BuyerVideos = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    gap: 10px;

    box-sizing: border-box;
    margin-top: 10px;

    img{
       width : 15% ;
    }

    video{
        width: 15%;
    }
`

export const ContainerTracking = styled.div`
    display: flex;
    
    flex-direction: column;
    
    & h4{
        color: #5a5a5a ;
    }

    & p{
        color: #5a5a5a;
    }
`

export const ContainerLine = styled.div`
    display: flex;
    width: 20%;
    align-items: center;
    justify-content: center;
`

export const UpLine = styled.div`
    width: 2px;
    height:20px;
    background-color: #5a5a5a;
`