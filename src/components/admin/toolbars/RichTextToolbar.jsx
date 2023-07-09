import React from 'react';
import {
    AlignmentButtons, ClearButtons,
    ColorButtons,
    FormatButtons,
    LevelSelect, LinkButtons, ListButtons, QuoteButtons,
    RichTextInputToolbar
} from "ra-input-rich-text";
import CreateResource from "../create/CreateResource";

const RichTextToolbar = () => {
    return (
        <RichTextInputToolbar>
            <LevelSelect/>
            <FormatButtons/>
            <ColorButtons/>
            <AlignmentButtons/>
            <ListButtons/>
            <LinkButtons/>
            <CreateResource/>
            <QuoteButtons/>
            <ClearButtons/>
        </RichTextInputToolbar>
    );
};

export default RichTextToolbar;