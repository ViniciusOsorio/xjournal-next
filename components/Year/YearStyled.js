import styled from "styled-components";

export const OuterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border: 1px gray solid;
    color: pink;
    padding: 15px 0px;
    margin: 0 80px;
`

export const YearDiv = styled.div`
    font-weight: bold;
    font-size: 15px;
    margin-top: 10px;
`

export const MonthDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 25px;
`

export const Buttons = styled.button`
    border: none;
    font-weight: bold;
    color: pink;
    font-size: 15px;
    background-color: white;
    &:hover{
        color: gray;
    }
`