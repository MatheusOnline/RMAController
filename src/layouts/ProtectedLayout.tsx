import styled from "styled-components";
import { Outlet } from "react-router-dom";

import Header from "../components/header/header";
import MainNavBar from "../components/NavBar/mainNavBar";
const Page = styled.div`
  width: 100%;
  height: 100%;

`
const Content = styled.div`
    padding-top: 70px;
    width: 100%;
    height: 99vh;
    display: flex;
`
const Router = styled.div`
    width: 100%;
    margin-left: 15%;
    overflow-y: scroll;
`

function ProtectedLayout(){

    return(
        <Page>
            <Header/>
            <Content>
                <MainNavBar/>
                <Router>
                    <Outlet/>
                </Router>
            </Content>
            
        </Page>

    )

}

export default ProtectedLayout