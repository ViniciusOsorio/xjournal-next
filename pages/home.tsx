import React from "react";
import { OuterWrapper,
         LowerWrapper,
         RightWrapper,
         CurrentDay } from "../styles/homeStyled";

import NavBar from "../components/NavBar/NavBar";
import Year from "../components/Year/Year";
import Month from "../components/Month/Month";
import SmallEntry from "../components/SmallEntry/SmallEntry";
import Calendar from "../components/Calendar2/Calendar";
import {ThemeProvider} from "styled-components";
import { LIGHT } from "../constants/theme";

const Home = () => {
    
    const entries = 3;

    const titles = ['teste 1', 'teste 2', 'teste 3', 'teste 4', 'teste 5',];

    const organizeEntries = () => {
        const result = [];
        for (let i = 0; i < entries; i++){
            result.push(<SmallEntry title={titles[i]}/>);
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