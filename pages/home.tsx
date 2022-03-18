import React from "react";
import { OuterWrapper,
         LowerWrapper,
         RightWrapper,
         CurrentDay } from "../styles/homeStyled";

import NavBar from "../components/NavBar/NavBar";
import Year from "../components/Year/Year";
import Month from "../components/Month/Month";
import Entry from "../components/Entry/Entry";
import Calendar from "../components/Calendar/Calendar";
import {ThemeProvider} from "styled-components";
import { LIGHT } from "../constants/theme";

const Home = () => {
    
    const entries = 3;

    const organizeEntries = () => {
        const result = [];
        for (let i = 0; i < entries; i++){
            result.push(<Entry/>);
        }
        return result;
    }
    
    return(
        <ThemeProvider theme={LIGHT}>
            <NavBar />
            <OuterWrapper>
                <Year/>
                <LowerWrapper>
                    {/* <Month /> */}
                    <Calendar onChange={(date) => console.log(date)}/>
                    <RightWrapper>
                        <CurrentDay>ELDEN RING IS GOTY</CurrentDay>
                        {organizeEntries()}
                    </RightWrapper>
                </LowerWrapper>
            </OuterWrapper>
        </ThemeProvider>
    )
}

export default Home;