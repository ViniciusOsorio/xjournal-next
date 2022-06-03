import styled from "styled-components";

export const OuterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;   
`
export const EntryDiv = styled.div`
    display: flex;
    flex-direction: column;
    /* background-color: cyan; */
    padding: 30px 40px;
`
export const MoodDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const StyledLabel = styled.label`
    font-size: 18px;
    margin-bottom: 5px;
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
    margin-bottom: 25px;
    padding: 10px;
    border-radius: 20px;
`

export const ButtonDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* background-color: aquamarine; */
    padding: 5px 20px;
`

export const StyledButton = styled.button`
    width: 280px;
    height: 80px;
    font-size: 18px;
    margin: 5px;
    text-align: center;
    border: 1px solid black;
    border-radius: 20px;
    &:hover{
        border: 2px solid black;
        background-color: #dbd9d9;
    }
`

export const MoodCardDiv = styled.div`
    width: 150px;
    height: 150px;
    margin-bottom: 40px ;
    /* border: 1px solid black;
    margin-bottom: 15px;
    justify-content: flex-start;    
    &:hover{
        border: 2px solid black;
    } */
`

export const TagInput = styled.input`
    width: 100%;
    height: 30px;
    font-size: 15px;
    padding: 10px;
    border-radius: 20px;
    border: none;
    &:focus{
        outline: none;
    }
`

export const SelectedTags = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 50px;
    margin-top: 15px;
`

export const TagWrapper = styled.div`
    display: flex;
    font-size: 12px;
    width: 100px;
    height: 60px;
    border: 1px solid lightgray;
    border-radius: 30px;
    background-color: lightgray;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
`

export const DeleteTag = styled.button`
    display: flex;
    background-color: transparent;
    border: none;
    &:hover{
        color: gray;
    }
`

export const TagButton = styled.button`
    border: none;
    border-left: 1px solid black;
    background-color: transparent;

`

export const TagDiv = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid black;
    border-radius: 20px;
`