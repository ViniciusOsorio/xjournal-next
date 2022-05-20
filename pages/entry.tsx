import React, {useState} from "react";
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

    const [moodInput, setMoodInput] = useState(0)
    const [comparator, setComparator] = useState(0)

    const compareMood = (num) => {
        setMoodInput(num)
    }

    return (
        <OuterWrapper>
            <NavBar/>
            <EntryDiv>
                <StyledLabel>How are you feeling?</StyledLabel>
                <MoodDiv>                        
                    <MoodCardDiv><MoodCard mood={1} onClick={() => compareMood(1)} selected={1 === moodInput}/></MoodCardDiv>                        
                    <MoodCardDiv><MoodCard mood={2} onClick={() => compareMood(2)} selected={2 === moodInput}/></MoodCardDiv>
                    <MoodCardDiv><MoodCard mood={3} onClick={() => compareMood(3)} selected={3 === moodInput}/></MoodCardDiv>
                    <MoodCardDiv><MoodCard mood={4} onClick={() => compareMood(4)} selected={4 === moodInput}/></MoodCardDiv>
                    <MoodCardDiv><MoodCard mood={5} onClick={() => compareMood(5)} selected={5 === moodInput}/></MoodCardDiv>
                    <MoodCardDiv><MoodCard mood={6} onClick={() => compareMood(6)} selected={6 === moodInput}/></MoodCardDiv>
                    <MoodCardDiv><MoodCard mood={7} onClick={() => compareMood(7)} selected={7 === moodInput}/></MoodCardDiv>
                </MoodDiv>
                <StyledLabel>How is your day going?</StyledLabel>
                <EntryText rows={10} placeholder={'No pressure!'}/>
                <StyledLabel>Tags:</StyledLabel>
                <TagInput placeholder={'#'}/>
                <SelectedTags/>
            </EntryDiv>
            <ButtonDiv>
                <StyledButton onClick={() => console.log(comparator, moodInput, comparator === moodInput)}>Create Entry</StyledButton>
                <StyledButton>Clean Form</StyledButton>
            </ButtonDiv>
        </OuterWrapper>
    )
}

export default Entry;