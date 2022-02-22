import React from "react";
import { OuterWrapper,
         LowerWrapper,
         RightWrapper,
         CurrentDay } from "../styles/homeStyled";

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
        <OuterWrapper>
            <h1>Home</h1>
            <LowerWrapper>
                <Month />
                <RightWrapper>
                    <CurrentDay>ELDEN RING COUNTDOWN: 4 DAYS</CurrentDay>
                    {organizeEntries()}
                </RightWrapper>
            </LowerWrapper>
        </OuterWrapper>
    )
}

export default Home;