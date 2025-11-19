import { ContainerSearch, SearchIcon, InputItem } from "./style";

function InputSearch({onChange}:any){
    return(
        <ContainerSearch htmlFor="">

            <InputItem type="search" placeholder="Pequise por id" onChange={(e) => onChange(e.target.value) }/>
            <SearchIcon/>

        </ContainerSearch>
    )
}

export default InputSearch;