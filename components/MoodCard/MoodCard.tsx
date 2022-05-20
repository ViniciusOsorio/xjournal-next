import React from "react"
import { useState, useEffect } from 'react'

import {
    OuterWrapper,
    CardName,
    MoodIcon
} from './MoodCardStyled'

import { 
    FaRegTired,
    FaRegMeh,
    FaRegFrown,
    FaRegLaughBeam,
    FaRegLaugh,
    FaRegSmile,
    FaRegAngry
} from "react-icons/fa";

const MoodCard = (props) => {

    const p = props;
    const [name, setName] = useState('')
    const [color, setColor] = useState('')
    const [isSelected, setIsSelected] = useState(false)
    const iconW = '20px'
    const iconH = '20px'
    
    useEffect(()=> {
        const setCardConfig = () => {
        
            switch (p.mood){
                case 4:
                    setName('Neutral')
                    setColor('#585958')
                    break
                case 5:
                    setName('Happy')
                    setColor('#04ff00')
                    break
                case 3:
                    setName('Sad')
                    setColor('#3f70bf')
                    break
                case 7:
                    setName('Fantastic')
                    setColor('#005ef5')
                    break
                case 1:
                    setName('Angry')
                    setColor('#ff1e00')
                    break
                case 6:
                    setName('Great')
                    setColor('#002e91')
                    break
                case 2:
                    setName('Stressed')
                    setColor('#fa6800')
                    break                  
                default:
                    break
            }
        }
        setCardConfig()
    }, [])

    const getMoodIcon = () => {
        switch(p.mood){
            case 4: //neutral
                return <FaRegMeh size={30}/>;
                break;
            case 5: //happy
                return <FaRegSmile size={30} />;
                break;
            case 3: //sad
                return <FaRegFrown size={30} />
                break;
            case 7: //fantastic
                return <FaRegLaughBeam size={30} />
                break;
            case 1: //angry
                return <FaRegAngry size={30} />
                break;
            case 6: //great
                return <FaRegLaugh size={30} />
                break;
            case 2: //stressed
                return <FaRegTired size={30} />
                break;                                                    
            default:
                break;
        }
    }
    
    

    return(
        <OuterWrapper color={color} onClick={p.onClick} selected={p.selected}>
            <MoodIcon>{getMoodIcon()}</MoodIcon>
            <CardName>{name}</CardName>
        </OuterWrapper>
    )
}

export default MoodCard;