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
    TagWrapper,
    DeleteTag,
    TagButton,
    TagDiv
} from '../styles/entryStyled';

import {FaTimes} from 'react-icons/fa';

const _ = require('lodash')

import MoodCard from '../components/MoodCard/MoodCard'

import NavBar from "../components/NavBar/NavBar";

const Entry = () => {

    const [moodInput, setMoodInput] = useState(0)
    const [comparator, setComparator] = useState(0)
    const [data, setData] = useState({})
    const [tagArray, setTagArray] = useState([])

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
        const key = tagArray.length + 1
        // let array = tagArray;
        // array.push(<TagWrapper>{text}</TagWrapper>)
        // console.log(array)      
        setTagArray([...tagArray, 
            <TagWrapper>{text+' '}
                <DeleteTag type={'button'} tagKey={key} onClick={deleteTag(key)}>
                    <FaTimes size={15}/>
                </DeleteTag>
            </TagWrapper>]);
        data.tag = null;
    }

    const deleteTag = (key) => {
        console.log(key)
        const array = [...tagArray]
        array.splice(key-1,1);
        console.log(array)
        setTagArray(array);
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

    const showArray = () => {
        if (tagArray.length) {
            for(let i = 0; i < tagArray.length ; i++){
                tagArray[i];
            }
        }
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
                        <TagDiv>
                            <TagInput placeholder={'#'}
                                name='tag'
                                value={data.tag || ''}
                                onChange={handleChange}
                                onSubmit={() => addTag}
                            >
                            </TagInput>
                            <TagButton type={'submit'} disabled={!(data.tag != '') || !(data.tag != null)}>Submit</TagButton>
                        </TagDiv>
                        <SelectedTags>                            
                            {tagArray}
                        </SelectedTags>
                    </form>
                </EntryDiv>
                <ButtonDiv>
                    <StyledButton onClick={() => console.log(tagArray)}>Create Entry</StyledButton>
                    <StyledButton onClick={handleClear}>Clean Form</StyledButton>
                </ButtonDiv>
        </OuterWrapper>
    )
}

export default Entry;