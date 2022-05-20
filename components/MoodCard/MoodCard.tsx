import React from "react"
import { useState, useEffect } from 'react'

import {
    OuterWrapper,
    CardName
} from './MoodCardStyled'

const MoodCard = (props) => {

    const p = props;
    const [name, setName] = useState('')
    const [color, setColor] = useState('')
    const [isSelected, setIsSelected] = useState('')
    
    useEffect(()=> {
        const setCardConfig = () => {
        
            switch (p.mood){
                case 1:
                    setName('Neutral')
                    setColor('grey')
                    break
                case 2:
                    setName('Happy')
                    setColor('lightgreen')
                    break
                case 3:
                    setName('Sad')
                    setColor('lightblue')
                    break
                case 4:
                    setName('Fantastic')
                    setColor('green')
                    break
                case 5:
                    setName('Angry')
                    setColor('red')
                    break
                case 6:
                    setName('Great')
                    setColor('blue')
                    break
                case 7:
                    setName('Stressed')
                    setColor('yellow')
                    break                  
                default:
                    break
            }
        }
        setCardConfig()
    }, [])
    
    

    return(
        <OuterWrapper color={color} /* onClick={setIsSelected(true)} */>
            <CardName>{name}</CardName>
        </OuterWrapper>
    )
}

export default MoodCard;