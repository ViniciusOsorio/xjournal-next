import styled from "styled-components";

export const OuterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 5px 0px;
    margin-right: 80px;
    color: blue;
`

export const ImageDiv = styled.div`
    border: 1px solid black;
    width: 65px;
    height: 65px;
    margin-right: 15px; 
`

export const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    /* line-height: 0px; */
    width: 400px;
`

export const EntryTitle = styled.div`
    font-size: 16px; 
`

export const EntryText = styled.div`
    font-size: 10px;
`