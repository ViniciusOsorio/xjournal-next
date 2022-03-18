import styled from "styled-components";

export const OuterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    color: green;
    margin-left: 80px;
`

export const WeekDiv = styled.div`
    display: flex;
    flex-direction: row;
`

export const WeekDayDiv = styled.div`
    display: flex;
    flex-direction: row;
    color: black;
`

export const WeekDay = styled.h1`
    width: 60px;
    height: 60px;
    border: 2px solid transparent;
    line-height: 70px;
    text-align: center;
    margin: 5px;
    margin-bottom: 10px;
    font-size: 25px;
`