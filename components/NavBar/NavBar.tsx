import React from "react";
import { OuterWrapper,
         ProfilePic, 
         SearchBar,
         ModeButton,
         SearchButton,
         SearchDiv,
         OptionsDiv,
         OptionButton } from "./NavBarStyled";

import {search} from 'react-icons-kit/icomoon/search'

const NavBar = () => {

    return(
        <OuterWrapper>
            <ProfilePic/>
            <ModeButton>Diário</ModeButton>
            <ModeButton>Comunidade</ModeButton>
            <SearchDiv>
                <SearchButton></SearchButton>
                <SearchBar placeholder="Pesquisar"/>
            </SearchDiv>
            <OptionsDiv>
                <OptionButton>H</OptionButton>
                <OptionButton>E</OptionButton>
                <OptionButton>C</OptionButton>
            </OptionsDiv>
        </OuterWrapper>
    )

}

export default NavBar;