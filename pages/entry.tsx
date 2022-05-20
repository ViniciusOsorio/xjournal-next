import React from "react";
import {
    OuterWrapper,
    EntryDiv,
    TagInput,
    EntryText,
    MoodDiv,
    StyledLabel,
    StyledButton,
    ButtonDiv,
    SelectedTags,
    MoodCardDiv
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
                        <MoodCardDiv><MoodCard mood={1}/></MoodCardDiv>                        
                        <MoodCardDiv><MoodCard mood={2}/></MoodCardDiv>
                        <MoodCardDiv><MoodCard mood={3}/></MoodCardDiv>
                        <MoodCardDiv><MoodCard mood={4}/></MoodCardDiv>
                        <MoodCardDiv><MoodCard mood={5}/></MoodCardDiv>
                        <MoodCardDiv><MoodCard mood={6}/></MoodCardDiv>
                        <MoodCardDiv><MoodCard mood={7}/></MoodCardDiv>
                    </MoodDiv>
                <StyledLabel>How is your day going?</StyledLabel>
                <EntryText rows={10} />
                <StyledLabel>Tags:</StyledLabel>
                <TagInput/>
                <SelectedTags/>
            </EntryDiv>
            <ButtonDiv>
                <StyledButton>Create Entry</StyledButton>
                <StyledButton>Clean Form</StyledButton>
            </ButtonDiv>
        </OuterWrapper>
    )
}

export default Entry;