import { HeaderContainer, Logo, Linkbutton, StoreLogo, ContainerStore } from "./header.style.tsx";
import { useState, useEffect } from "react";

function Header() {
  const [linkLogo, setLinkLogo] = useState(localStorage.getItem("logo") || "");

  // Atualiza sempre que o localStorage muda
  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key === "logo") setLinkLogo(event.newValue || "");
    };
    window.addEventListener("storage", handleStorage);

    // Opcional: observar mudanças do mesmo tab
    const observer = new MutationObserver(() => {
      setLinkLogo(localStorage.getItem("logo") || "");
    });
    observer.observe(document.body, { attributes: true, childList: true, subtree: true });

    return () => {
      window.removeEventListener("storage", handleStorage);
      observer.disconnect();
    };
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
