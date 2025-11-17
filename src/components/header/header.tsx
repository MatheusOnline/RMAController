import { HeaderContainer, Logo} from "./header.style.tsx";

import BrandLogo from "../../assets/logos/Devolu (1).png"

//##COMPONENTES##//
import ProfileIcon from "../ProfileIcon/profileIcon";
function Header() {
  


  return (
    <HeaderContainer>
      <Logo src={BrandLogo}></Logo>
      <ProfileIcon/>
      
    </HeaderContainer>
  );
}

export default Header;
