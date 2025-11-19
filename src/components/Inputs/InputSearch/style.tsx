import styled from "styled-components";

import { CiSearch } from "react-icons/ci";


export const ContainerSearch = styled.label`
    border : 1px solid  var(--item-color);
    display: flex;
    align-items: center;
    background-color: transparent;
    border-radius: 6px;
    width: 250px;
    padding: 12px;
    box-sizing: border-box;
    transition: background-color 0.3s ease, border-color 0.3s ease;
    
    &:focus-within {
        background-color: var(--transparent-color); /* exemplo */
      
    }
     &:focus-within svg {
        color: #ffffff;
    }
`
export const InputItem = styled.input`
    width: 85%;
    height: 100%;
    background-color: transparent;
    border: none;
    color: #ffffff;
    font-size: 16px;

    &::placeholder {
        font-size: 16px;
        color: var(--item-color);
        transition: color 0.3s ease;   /* anima o placeholder */
    }

    &:focus::placeholder {
        color: #ffffff;
    }

    &:focus {
        outline: none;
    }
`;


export const SearchIcon = styled(CiSearch)`
    
    font-size: 24px; 
    color: var(--item-color);
`