import styled from "styled-components";

//=========ICONS=========//
import { LuRefreshCcw } from "react-icons/lu";
import { BsSearch } from "react-icons/bs";

export const Page = styled.main`
    width: 100%;
`

export const ContainerPage = styled.div`
    padding-top: 40px;
    padding-left: 20px;
    padding-right: 20px;
    font-family: Arial, Helvetica, sans-serif;
`

export const FunctionBar = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
    margin-bottom: 50px;
    gap: 35px;

    border-bottom: 1px solid #c7c7c7;
    padding-bottom: 20px;
`

export const ButtonRefresh = styled.button`
    background-color: #125f8bae;   
    width: 50px;
    height: 100%;
    border-radius: 8px;
    border: none;
    transition: 0.3s ease;

    &:hover{
        background-color: #125f8b7a;
        cursor: pointer;
    }
`

export const RefreshIcon = styled(LuRefreshCcw)`
    color: aliceblue;
    width: 60%;
    height: 60%;
`

export const ContainerInput = styled.label`
    background-color: #125f8bae;
    width: 250px;
    display: flex;
    align-items: center;
    border: 1px solid #125f8b;
    border-radius: 6px;
    color: aliceblue;

`

export const InputSeach = styled.input`
    background-color: transparent;
    width: 90%;
    height: 100%;
    border: none;
    color: aliceblue;


    &::placeholder{
        color: aliceblue;
        font-size: 12px;
    }

    &:focus{
        outline: none;
    }
`

export const SeachIcon = styled(BsSearch)`
    color: aliceblue;
    width: 20%;
    height: 50%;
`

export const ContainerNotreturn = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const WapperNoReturn = styled.div`
    background: #125f8bae;
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
    color: aliceblue;
`

export const TableReturn = styled.table`
    width: 100%;
`

export const ContainerSelect = styled.div`
    width: 200px;
    height: 100%;
    display: flex;
    align-items: center
`;
export const SelectStatus = styled.select`
    background-color: #125f8bae;
    color: aliceblue;
    width: 90%;
    height: 100%;
    border-radius: 6px;
`