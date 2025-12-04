import { useLocation, useNavigate } from "react-router-dom";


import { NavBarContainer,LinkButton, Nav, ItemList, ExitButton, Line } from "./style"

//###ICONS###//
import { FaHome } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import { IoExitOutline } from "react-icons/io5";
import { VscDebugDisconnect } from "react-icons/vsc";



function MainNavBar(){
    const location = useLocation();
    const navigate = useNavigate();
    function exit(){
        localStorage.removeItem("user_token")
        navigate("/login")
    }
    return(
        <NavBarContainer>
            
           
            <Nav>
                <ItemList active={location.pathname === "/home"}>
                    <FaHome color="white"/>
                    <LinkButton to="">Home</LinkButton>
                </ItemList>

                <ItemList active={location.pathname === "/dashboard"}>
                    <MdSpaceDashboard color="white"/>
                    <LinkButton to="dashboard">Dashboard</LinkButton>
                </ItemList>

                <ItemList active={location.pathname === "/returns"}>
                    <TbTruckReturn color="white"/>
                    <LinkButton to="returns">Devoluções</LinkButton>
                </ItemList>

                <ItemList active={location.pathname === "/auth"}>
                    <VscDebugDisconnect color="white"/>
                    <LinkButton to="auth">Integrações</LinkButton>
                </ItemList>
            </Nav>
            <br />
            <Line />
            <br />
            <ExitButton onClick={exit  } ><IoExitOutline color="red"/>Sair</ExitButton>
        </NavBarContainer>
    )
}

export default MainNavBar