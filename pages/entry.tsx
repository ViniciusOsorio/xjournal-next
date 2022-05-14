import React from "react";
import {
    OuterWrapper,
    EntryDiv,
    EntryTitle,
    EntryText,
    MoodDiv,
    StyledLabel,
    StyledButton,
    ButtonDiv
} from '../styles/entryStyled';

import MoodCard from '../components/MoodCard/MoodCard'

import NavBar from "../components/NavBar/NavBar";

const Entry = () => {
    
    return (
        <OuterWrapper>
            <NavBar/>
            <EntryDiv>
                <StyledLabel>How are you feeling?</StyledLabel>
                    <MoodDiv>                        
                        <MoodCard mood={1}/>
                        <MoodCard mood={2}/>
                        <MoodCard mood={3}/>
                        <MoodCard mood={4}/>
                        <MoodCard mood={5}/>
                        <MoodCard mood={6}/>
                        <MoodCard mood={7}/>
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