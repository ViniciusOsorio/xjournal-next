import styled from "styled-components";

export const OuterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: yellow;
    border-bottom: 1px gray solid;
    justify-content: space-evenly;    
    padding: 5px 45px;
`
export const ProfilePic = styled.div`
    border-radius: 30px;
    border: 1px solid black;
    width: 60px;
    height: 30px;
`

export const SearchBar = styled.input`
    width: 200px;
    height: 30px;
    margin-left: 15px;
    border: none;
    outline: none;
    &:focus{
        border: none;
    }
`

export const ModeButton = styled.button`
    font-size: 18px;
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
    height: 40px;
    display: flex;
    align-items: center;
`

export const OptionsDiv = styled.div`
    display: flex;
`

export const OptionButton = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 50px;
    margin: 15px;
`