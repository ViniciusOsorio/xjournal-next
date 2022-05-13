import styled from "styled-components";

export const OuterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;   
`
export const EntryDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: cyan;
    padding: 30px 40px;
`
export const MoodDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
`

export const StyledLabel = styled.label`
    font-size: 18px;
`

export const EntryTitle = styled.input`
    font-size: 15px;
    margin-bottom: 10px;
    margin-left: 15px;
    height: 30px;
    width: 100%;
`

export const EntryText = styled.textarea`
    font-size: 15px;
    width: 100%;
    resize: none;
`

export const ButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: aquamarine;
    padding: 5px 20px;
`

export const StyledButton = styled.button`
    width: 280px;
    height: 80px;
    font-size: 18px;
    margin: 5px;
    text-align: center;
`

export const MoodCard = styled.button`
    width: 180px;
    height: 180px;
    border: 1px solid black;
    margin: 15px 0px;
    justify-content: flex-start;
    &:hover{
        border: 2px solid black;
    }
`