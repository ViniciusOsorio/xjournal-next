import React from "react";
import { OuterWrapper,
         LowerWrapper,
         RightWrapper,
         CurrentDay } from "../styles/homeStyled";

import NavBar from "../components/NavBar/NavBar";
import Year from "../components/Year/Year";
import Month from "../components/Month/Month";
import Entry from "../components/Entry/Entry";

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
        <>
            <NavBar />
            <OuterWrapper>
                
                <h1>Home</h1>
                <Year/>
                <LowerWrapper>
                    <Month />
                    <RightWrapper>
                        <CurrentDay>ELDEN RING COUNTDOWN: 3 DAYS</CurrentDay>
                        {organizeEntries()}
                    </RightWrapper>
                </LowerWrapper>
            </OuterWrapper>
        </>
    )
}

export default Home;