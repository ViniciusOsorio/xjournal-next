import React from "react";
import { OuterWrapper,
         TextDiv,
         ImageDiv,
         EntryTitle,
         EntryText } from "./SmallEntryStyled";
import { truncate } from "lodash";

const SmallEntry = (props) => {

    return (
        <OuterWrapper>
            <ImageDiv/>
            <TextDiv>
                <EntryTitle>{props.title}</EntryTitle>
                <EntryText>{truncate('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident quae officiis iure quas, nobis aut? Natus laborum repellat quaerat incidunt, sapiente magni, animi eligendi corrupti facere sequi quae. Aperiam, blanditiis.', {length: 200})}</EntryText>
            </TextDiv>            
        </OuterWrapper>
    )

}

export default SmallEntry;