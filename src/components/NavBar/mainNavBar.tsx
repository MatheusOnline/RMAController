import { useLocation } from "react-router-dom";


import { NavBarContainer,LinkButton, Nav, ItemList, ExitButton, Line } from "./style"

//###ICONS###//
import { FaHome } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { IoExitOutline } from "react-icons/io5";
import { VscDebugDisconnect } from "react-icons/vsc";

//##COMPONENTES##//
import ProfileIcon from "../ProfileIcon/profileIcon";

function MainNavBar(){
    const location = useLocation();

    return(
        <NavBarContainer>
            <ProfileIcon/>
           
            <Nav>
                <ItemList active={location.pathname === "/home"}>
                    <FaHome color="white"/>
                    <LinkButton to="home">Home</LinkButton>
                </ItemList>

                <ItemList active={location.pathname === "/dashboard"}>
                    <MdSpaceDashboard color="white"/>
                    <LinkButton to="dashboard">Dashboard</LinkButton>
                </ItemList>

                <ItemList active={location.pathname === "/returns"}>
                    <TbTruckReturn color="white"/>
                    <LinkButton to="returns">Devoluções</LinkButton>
                </ItemList>

                <ItemList active={location.pathname === "/scanner"}>
                    <MdOutlineQrCodeScanner color="white"/>
                    <LinkButton to="scanner">Scaner</LinkButton>
                </ItemList>

                <ItemList active={location.pathname === "/sing"}>
                    <VscDebugDisconnect color="white"/>
                    <LinkButton to="sing">Conectar</LinkButton>
                </ItemList>
            </Nav>
            <br />
            <Line />
            <br />
            <ExitButton ><IoExitOutline color="red"/>Sair</ExitButton>
        </NavBarContainer>
    )
}

export default MainNavBar