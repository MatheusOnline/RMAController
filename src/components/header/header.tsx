import { HeaderContainer, Logo, Linkbutton, StoreLogo, ContainerStore } from "./header.style.tsx";
import { useState, useEffect } from "react";

function Header() {
  const [linkLogo, setLinkLogo] = useState("");

  useEffect(() => {
    // Inicializa o logo do localStorage, se existir
    const storedLogo = localStorage.getItem("logo");
    if (storedLogo) setLinkLogo(storedLogo);

    // Listener para atualizar via evento customizado
    const handleLogoUpdate = (event: Event) => {
      const customEvent = event as CustomEvent<string>;
      setLinkLogo(customEvent.detail);
    };

    window.addEventListener("logoUpdate", handleLogoUpdate);

    return () => {
      window.removeEventListener("logoUpdate", handleLogoUpdate);
    };
  }, []);

  return (
    <HeaderContainer>
      <Logo>RMA Controller</Logo>
      <ContainerStore>
        <Linkbutton to="/Scaner">Escanear</Linkbutton>
        <Linkbutton to="/return">Devoluçoes</Linkbutton>
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
