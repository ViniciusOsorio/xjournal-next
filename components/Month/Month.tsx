import react, {useEffect, useState} from "react";
import { WeekDiv,
         WeekDayDiv,
         OuterWrapper, 
         WeekDay} from "./MonthStyled";

import Day from "../Day/Day";


const Month = () => {



    const MountWeek = () => {
        let week = [];
        for(let i=0; i<7; i++){
            week.push(<Day/>)
        }
        return <WeekDiv>{week}</WeekDiv>;
    }

    const MountMonth = () => {
        let month = [];
        for (let i = 0; i<6; i++){
            month.push(MountWeek())
        }
        return month;
    }

    return(
        <OuterWrapper>
            <WeekDayDiv>
                <WeekDay>D</WeekDay>
                <WeekDay>S</WeekDay>
                <WeekDay>T</WeekDay>
                <WeekDay>Q</WeekDay>
                <WeekDay>Q</WeekDay>
                <WeekDay>S</WeekDay>
                <WeekDay>S</WeekDay>
            </WeekDayDiv>
            {MountMonth()}
        </OuterWrapper>
    )

}

export default Month;