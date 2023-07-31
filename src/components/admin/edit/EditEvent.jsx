import React from 'react';
import {
    DateInput,
    Edit,
    TimeInput,
    DateTimeInput,
    TextInput,
    TabbedForm, ImageInput, required, ImageField
} from 'react-admin';
import {RichTextInput} from "ra-input-rich-text";
import RichTextToolbar from "../toolbars/RichTextToolbar";
import {Col} from "react-bootstrap";
import {
    formatDateToTime,
    formatImage
} from "../../../http/dataProviders/functions";

const EditEvent = () => {
    return (
        <Edit>
            <TabbedForm>
                <TabbedForm.Tab label="Main">
                    <TextInput source="title" fullWidth inputProps={{maxLength: 255}}/>
                    <Col>
                        <DateInput source="date" className="me-5"/>
                        <TimeInput source="start_time"
                                   format={formatDateToTime}
                                   className="me-5"/>
                        <TimeInput source="end_time"
                                   format={formatDateToTime}/>
                    </Col>
                    <TextInput source="place" fullWidth inputProps={{maxLength: 255}}/>
                    <DateTimeInput source="created_at" disabled/>
                </TabbedForm.Tab>
                <TabbedForm.Tab label="Body">
                    <ImageInput format={formatImage}
                                minSize={5000}
                                maxSize={5000000}
                                source="preview"
                                accept="image/*"
                                validate={required()}>
                        <ImageField source="src"/>
                    </ImageInput>
                    <TextInput source="short_description" fullWidth multiline
                               rows={5} inputProps={{maxLength: 255}}/>
                    <RichTextInput
                        source="description"
                        toolbar={<RichTextToolbar/>}
                        validate={required()}/>
                </TabbedForm.Tab>
            </TabbedForm>
        </Edit>
    );
};

export default EditEvent;