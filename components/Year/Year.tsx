import react, {useEffect, useState} from "react";
import { OuterWrapper,
         YearDiv,
         MonthDiv,
         IndivMonth,
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
                <IndivMonth><Buttons>JAN</Buttons></IndivMonth>
                <IndivMonth><Buttons>FEV</Buttons></IndivMonth>
                <IndivMonth><Buttons>MAR</Buttons></IndivMonth>
                <IndivMonth><Buttons>ABR</Buttons></IndivMonth>
                <IndivMonth><Buttons>MAI</Buttons></IndivMonth>
                <IndivMonth><Buttons>JUN</Buttons></IndivMonth>
                <IndivMonth><Buttons>JUL</Buttons></IndivMonth>
                <IndivMonth><Buttons>AGO</Buttons></IndivMonth>
                <IndivMonth><Buttons>SET</Buttons></IndivMonth>
                <IndivMonth><Buttons>OUT</Buttons></IndivMonth>
                <IndivMonth><Buttons>NOV</Buttons></IndivMonth>
                <IndivMonth><Buttons>DEZ</Buttons></IndivMonth>
            </MonthDiv>
        </OuterWrapper>
    )
}

export default Year;