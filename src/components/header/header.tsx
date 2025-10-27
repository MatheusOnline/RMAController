import { HeaderContainer, Logo, Connect, StoreLogo } from "./header.style.tsx";
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

      <Connect to="/auth">Conectar Loja</Connect>

      <StoreLogo>
        {linkLogo && <img src={linkLogo} alt="Logo da loja" />}
      </StoreLogo>
    </HeaderContainer>
  );
}

export default Header;
