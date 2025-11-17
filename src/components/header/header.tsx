import { HeaderContainer, Logo} from "./header.style.tsx";

import BrandLogo from "../../assets/logos/Devolu (1).png"
function Header() {
  


  return (
    <HeaderContainer>
     
      <Logo src={BrandLogo}></Logo>
      
    </HeaderContainer>
  );
}

export default Header;
