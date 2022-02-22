import styled from "styled-components";

export const OuterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border: 1px gray solid;
    color: pink;
    padding: 15px 0px;
`

export const YearDiv = styled.div`
    font-weight: bold;
    font-size: 20px;
    margin-top: 10px;
`

export const MonthDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 25px;
`

export const IndivMonth = styled.div`
    font-weight: bold;
    font-size: 20px;
`