import { HeaderContainer, Logo, Linkbutton, StoreLogo,ContainerStore } from "./header.style.tsx";
import { useState, useEffect } from "react";

function Header() {
  const [linkLogo, setLinkLogo] = useState("");

  useEffect(() => {
    const logo = localStorage.getItem("logo");
    if (logo) setLinkLogo(logo);
  }, []); 

  return (
    <HeaderContainer>
      <Logo>RMA Controller</Logo>

      <ContainerStore>
        <Linkbutton to="/">Home</Linkbutton>
       
          <StoreLogo>
            <img src={linkLogo} alt="Logo da loja" />
          </StoreLogo>
          
          <Linkbutton to="/auth">Conectar Loja</Linkbutton>
          
        
      </ContainerStore>
    </HeaderContainer>
  );
}

export default Header;
