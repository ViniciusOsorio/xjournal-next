import styled from "styled-components";


export const OuterWrapper = styled.button`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: ${props => props.selected ? props.color : '#ffffff'};
    color: ${props => props.selected ? '##000000' : props.color };
    border: 2px solid ${props => props.color};
    border-radius: 20px;
    margin: 15px 0px;
    padding: 5px;
    align-items: center;
    justify-content: center;
    &:hover{
        border: 3px solid ${props => props.color};
        padding: 4px;
    }
`

export const CardName = styled.label`
    font-size: 18px;
`

export const MoodIcon = styled.div`
    display: flex;
    color: ${props => props.selected ? '##000000' : props.color}
    justify-content: flex-start;
    margin-right: 10px;
    
`