import React from "react";
import { OuterWrapper,
         ProfilePic, 
         SearchBar,
         ModeButton } from "./NavBarStyled";

const NavBar = () => {

    return(
        <OuterWrapper>
            <ProfilePic/>
            <ModeButton>Teste</ModeButton>
            <ModeButton>Teste</ModeButton>
            <SearchBar placeholder="Pesquisar"/>
        </OuterWrapper>
    )

}

export default NavBar;