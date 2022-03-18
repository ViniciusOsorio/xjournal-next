import react, {useEffect, useState} from "react";
import { OuterWrapper,
         YearDiv,
         MonthDiv,
         Buttons } from "./YearStyled";

const Year = () => {
    
    
    return (
        <OuterWrapper>
            <YearDiv>
                <Buttons> {'<'} </Buttons>
                2022
                <Buttons> {'>'} </Buttons>
            </YearDiv>
            <MonthDiv>
                <Buttons>JAN</Buttons>
                <Buttons>FEV</Buttons>
                <Buttons>MAR</Buttons>
                <Buttons>ABR</Buttons>
                <Buttons>MAI</Buttons>
                <Buttons>JUN</Buttons>
                <Buttons>JUL</Buttons>
                <Buttons>AGO</Buttons>
                <Buttons>SET</Buttons>
                <Buttons>OUT</Buttons>
                <Buttons>NOV</Buttons>
                <Buttons>DEZ</Buttons>
            </MonthDiv>
        </OuterWrapper>
    )
}

export default Year;