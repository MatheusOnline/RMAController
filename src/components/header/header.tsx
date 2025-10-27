import { HeaderContainer, Logo, Linkbutton, StoreLogo,ContainerStore } from "./header.style.tsx";
import { useState, useEffect } from "react";

function Header() {
  const [linkLogo, setLinkLogo] = useState("");

  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key === "logo") setLinkLogo(event.newValue || "");
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
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
