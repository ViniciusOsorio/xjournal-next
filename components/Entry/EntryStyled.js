import styled from "styled-components";

export const OuterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 5px 0px;
`

export const ImageDiv = styled.div`
    border: 1px solid black;
    width: 75px;
    height: 75px;
    margin-right: 15px; 
`

export const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    /* line-height: 0px; */
    width: 450px;
`

export const EntryTitle = styled.div`
    font-size: 18px; 
`

export const EntryText = styled.div`
    font-size: 12px;
`