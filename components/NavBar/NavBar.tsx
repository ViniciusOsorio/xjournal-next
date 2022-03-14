import React from "react";
import { OuterWrapper,
         ProfilePic, 
         SearchBar,
         ModeButton,
         SearchButton,
         SearchDiv,
         OptionsDiv,
         OptionButton } from "./NavBarStyled";

const NavBar = () => {

    return(
        <OuterWrapper>
            <ProfilePic/>
            <ModeButton>Diário</ModeButton>
            <ModeButton>Comunidade</ModeButton>
            <SearchDiv>
                <SearchButton/>
                <SearchBar placeholder="Pesquisar"/>
            </SearchDiv>
            <OptionsDiv>
                <OptionButton>A</OptionButton>
                <OptionButton>B</OptionButton>
                <OptionButton>C</OptionButton>
            </OptionsDiv>
        </OuterWrapper>
    )

}

export default NavBar;