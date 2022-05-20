import styled from "styled-components";



export const OuterWrapper = styled.button`
    width: 100%;
    height: 100%;
    color: ${props => props.color};
    border: 2px solid ${props => props.color};
    margin: 15px 0px;
    justify-content: flex-start;
    &:hover{
        border: 3px solid ${props => props.color};
    }
`

export const CardName = styled.label`
    font-size: 15px;
`