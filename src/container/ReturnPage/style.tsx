import styled from "styled-components";



export const Page = styled.main`
    width: 100%;
    background-color: var(--background-color);
    height: 100%;
`

export const ContainerPage = styled.div`
    
    padding-left: 20px;
    padding-right: 20px;
    font-family: Arial, Helvetica, sans-serif;
`

export const TitleSection = styled.h2`
    font-size: 22px;
    font-weight: 600;
    color: var(--item-color);
    padding: 10px 0px;
`

export const FunctionBar = styled.div`
    width: 100%;
    
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    gap: 35px;
    justify-content: space-between;
    padding-bottom: 20px;
    align-items: center;
    
`

export const ContainerNotreturn = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const WapperNoReturn = styled.div`
    border:1px solid  var(--item-color);
    width: 30%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`

export const TextNoReturn = styled.p`
    font-size: 18px;
    color: var(--item-color);
`

export const TableContainer = styled.div`
    width: 100%;
    height: 100%;
    background: #fff;
`

export const TableScroll = styled.div`
    width: 100%;
    max-height: 500px;
    
    overflow-x: hidden;
    
    overflow-y: auto;
    scroll-behavior: smooth;

&::-webkit-scrollbar {
    width: 6px;
}
&::-webkit-scrollbar-thumb {
    background: #bdbdbd;
    border-radius: 4px;
}
`

export const TableReturn = styled.div`
    width: 100%;
    padding:  20px;
    box-sizing: border-box;
`

export const ReturnsSummary = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 12px;
    box-sizing: border-box;
    border-radius: 6px 6px 0px 0px;
    color: #666;
    background-color: #f3f3f3;
    font-weight: bold;
    border-bottom: 1px solid #ddd;
    gap: 10px;
    & p{
        font-size: 13px;
        font-weight: 200;
    }
`

export const FoosterTable = styled.div`
    width: 100%;
    display: flex;
    padding: 10px 12px;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    color: var(--item-color);
    box-sizing: border-box;
`

export const PageButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
`