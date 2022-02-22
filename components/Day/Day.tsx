import react, {useEffect, useState} from "react";
import { OuterWrapper, 
         DayText } from "./DayStyled";

const Day = () => {

    const [selectedDay, setSelectedDay] = useState()

    return(
        <>
            <OuterWrapper >
                <DayText>1</DayText>
            </OuterWrapper>
        </>
    )

}

export default Day;