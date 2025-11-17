import styled from "styled-components";

import { Link } from "react-router-dom";

export const NavBarContainer = styled.div`
    width: 15%;
    height: 100%;

    background-color: var(--brand-color);
    padding: 12px;
    box-sizing: border-box;
    position: fixed;
`

export const Nav = styled.ul`
    margin-top: 20%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
`
export const ItemList = styled.li<{active?: boolean}>`
    width: 100%;
    padding: 8px 8px;
    box-sizing: border-box;
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 5px;
     background-color: ${({active}) => active ? "#0eb2cf" : "transparent"};
    &:hover{
        background-color: #0eb2cf;
    }
`


export const LinkButton = styled(Link)`
    width: 100%;
    color:  #FFFFFF;
    text-decoration: none;
    font-size: 20px;

    @media (max-width: 768px) {
        display: none;
    }

`

export const Line = styled.hr`
    border: 1px solid #FFFFFF;
`

export const ExitButton = styled.button`
    width: 100%;
    background-color: transparent;
    border: none;
    color:  red;
    text-decoration: none;
    font-size: 20px;
    text-align: start;
    padding: 8px 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;

    @media (max-width: 768px) {
        display: none;
    }
`