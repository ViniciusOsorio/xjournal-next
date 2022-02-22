import react, {useEffect, useState} from "react";
import { OuterWrapper,
         YearDiv,
         MonthDiv,
         IndivMonth } from "./YearStyled";

const Year = () => {
    
    
    return (
        <OuterWrapper>
            <YearDiv>
                2022
            </YearDiv>
            <MonthDiv>
                <IndivMonth>JAN</IndivMonth>
                <IndivMonth>FEV</IndivMonth>
                <IndivMonth>MAR</IndivMonth>
                <IndivMonth>ABR</IndivMonth>
                <IndivMonth>MAI</IndivMonth>
                <IndivMonth>JUN</IndivMonth>
                <IndivMonth>JUL</IndivMonth>
                <IndivMonth>AGO</IndivMonth>
                <IndivMonth>SET</IndivMonth>
                <IndivMonth>OUT</IndivMonth>
                <IndivMonth>NOV</IndivMonth>
                <IndivMonth>DEZ</IndivMonth>
            </MonthDiv>
        </OuterWrapper>
    )
}

export default Year;