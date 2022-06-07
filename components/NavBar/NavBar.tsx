import React from "react";
import { OuterWrapper,
         ProfilePic, 
         SearchBar,
         ModeButton,
         SearchButton,
         SearchDiv,
         OptionsDiv,
         OptionButton } from "./NavBarStyled";

import Link from "next/link";

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
                <Link href='/home'><OptionButton>H</OptionButton></Link>
                <Link href='/entry'><OptionButton>E</OptionButton></Link>
                <Link href=''><OptionButton>C</OptionButton></Link>
            </OptionsDiv>
        </OuterWrapper>
    )

}

export default NavBar;