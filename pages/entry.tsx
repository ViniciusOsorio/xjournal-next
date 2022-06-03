import React, {useEffect, useState} from "react";
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
    MoodCardDiv,
    TagWrapper
} from '../styles/entryStyled';

const _ = require('lodash')

import MoodCard from '../components/MoodCard/MoodCard'

import NavBar from "../components/NavBar/NavBar";

const Entry = () => {

    const [moodInput, setMoodInput] = useState(0)
    const [comparator, setComparator] = useState(0)
    const [data, setData] = useState({})
    const tagArray = []

    useEffect(() => {
        
    },[])

    const compareMood = (num) => {
        let values = {...data}
        setMoodInput(num)
        values.mood = num;
        setData(values);        
        console.log(values)
    }

    const addTag = (e) => {
        e.preventDefault();
        let text = data.tag
        tagArray.push(<TagWrapper>{text}</TagWrapper>)        
        console.log(tagArray);
    }

    const handleChange = (e) => {
        let values = {...data}
        switch(e.target.name){
            default:
                values[e.target.name] = e.target.value;
        }
        
        setData(values);
        console.log(values)
    }

    const generateCards = () => {            
        const cards = [];
        for (let i=0; i<7; i++){
            cards.push(
            <MoodCardDiv>
                <MoodCard name='mood' value={i+1} mood={i+1} onClick={() => compareMood(i+1)} selected={i+1 === moodInput} />
            </MoodCardDiv>)
        }        
        return cards;
    }

    const handleSubmit = () => {

    }

    const handleClear = () => {
        setMoodInput(0)
        setData({})
    }

    return (
        <OuterWrapper>
            <NavBar/>
                <EntryDiv>
                    <StyledLabel>How are you feeling?</StyledLabel>
                    <MoodDiv>                        
                        {generateCards()}
                    </MoodDiv>
                    <StyledLabel>How is your day going?</StyledLabel>
                    <EntryText 
                        name='text'
                        onChange={handleChange}
                        value={data.text || ''}
                        rows={10} 
                        placeholder={'No pressure!'}/>
                    <form onSubmit={addTag}>
                        <StyledLabel>Tags:</StyledLabel>
                        <TagInput placeholder={'#'} 
                            name='tag'
                            value={data.tag || ''}
                            onChange={handleChange}
                            onSubmit={() => addTag}/>
                        <SelectedTags><TagWrapper>Teste</TagWrapper>{tagArray}</SelectedTags>
                    </form>
                </EntryDiv>
                <ButtonDiv>
                    <StyledButton onClick={() => console.log(comparator, moodInput, comparator === moodInput)}>Create Entry</StyledButton>
                    <StyledButton onClick={handleClear}>Clean Form</StyledButton>
                </ButtonDiv>
        </OuterWrapper>
    )
}

export default Entry;