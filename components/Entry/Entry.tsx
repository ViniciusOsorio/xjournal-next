import React from "react";
import { OuterWrapper,
         TextDiv,
         ImageDiv,
         EntryTitle,
         EntryText } from "../Entry/EntryStyled";
import { truncate } from "lodash";

const Entry = () => {

    return (
        <OuterWrapper>
            <ImageDiv/>
            <TextDiv>
                <EntryTitle>Entrada 1</EntryTitle>
                <EntryText>{truncate('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident quae officiis iure quas, nobis aut? Natus laborum repellat quaerat incidunt, sapiente magni, animi eligendi corrupti facere sequi quae. Aperiam, blanditiis.', {length: 200})}</EntryText>
            </TextDiv>
            
        </OuterWrapper>
    )

}

export default Entry;