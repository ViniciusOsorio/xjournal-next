import styled from "styled-components";

export const OuterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    color: yellow;
    border-bottom: 1px gray solid;
    justify-content: space-evenly;    
    padding: 5px 0px;
    margin-bottom: 40px;
`
export const ProfilePic = styled.div`
    border-radius: 30px;
    border: 1px solid black;
    width: 80px;
    height: 50px;
    margin-top: 15px;
`

export const SearchBar = styled.input`
    width: 200px;
    height: 40px;
    margin-top: 5px;
    margin-left: 15px;
    border: none;
    &:focus{
        border: none;
    }
`

export const ModeButton = styled.button`
    font-size: 20px;
    margin: 0px 15px;
    background-color: transparent;
    border: none;
    &:hover{
        color: gold;
    }
`
export const SearchButton = styled.button`
    width: 20px;
    height: 20px;
    margin-left: 8px;
`

export const SearchDiv = styled.div`
    border: 1px solid black;
    background-color: white;
    height: 50px;
    margin-top: 15px;
`

export const OptionsDiv = styled.div`
    display: flex;
`

export const OptionButton = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 50px;
    margin: 15px;
`