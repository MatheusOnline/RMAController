import { ButtonRefreshItem } from "./style"

import { MdOutlineRefresh } from "react-icons/md";
function ButtonRefresh({onClick}:any){
    return(
        <ButtonRefreshItem onClick={onClick}>

            <MdOutlineRefresh size={"25px"} color={"#666"}/>
        
        </ButtonRefreshItem>
    )

}

export default ButtonRefresh