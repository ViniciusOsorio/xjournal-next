import styled from "styled-components";

export const OuterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    color: yellow;
    border-bottom: 1px gray solid;
    justify-content: space-evenly;    
    padding: 20px 0px;
    margin-bottom: 40px;
`
export const ProfilePic = styled.div`
    border-radius: 30px;
    border: 1px solid black;
    width: 80px;
    height: 50px;
`

export const SearchBar = styled.input`
    width: 200px;
    height: 40px;
    margin-top: 5px;
    margin-left: 15px;
`

export const ModeButton = styled.button`
    font-size: 20px;
    margin: 0px 15px;
    background-color: transparent;
    border: none;
    &:hover{
        color: yellow;
    }
`