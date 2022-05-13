import React from "react";
import {
    OuterWrapper,
    EntryDiv,
    EntryTitle,
    EntryText,
    MoodDiv,
    StyledLabel,
    StyledButton,
    ButtonDiv,
    MoodCard
} from '../styles/entryStyled';

import NavBar from "../components/NavBar/NavBar";

const Entry = () => {
    
    return (
        <OuterWrapper>
            <NavBar/>
            <EntryDiv>
                <StyledLabel>How are you feeling?</StyledLabel>
                    <MoodDiv>                        
                        <MoodCard>Happy</MoodCard>
                        <MoodCard>Sad</MoodCard>
                        <MoodCard>Angry</MoodCard>
                        <MoodCard>Confused</MoodCard>
                        <MoodCard>Neutral</MoodCard>
                    </MoodDiv>
                <StyledLabel>How is your day going?</StyledLabel>
                <EntryText rows={10} />
            </EntryDiv>
            <ButtonDiv>
                <StyledButton>Create Entry</StyledButton>
                <StyledButton>Clean Form</StyledButton>
            </ButtonDiv>
        </OuterWrapper>
    )
}

export default Entry;