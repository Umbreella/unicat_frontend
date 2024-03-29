import React from 'react';
import {
    Create,
    TextInput,
    required,
    TabbedForm,
    ImageInput,
    ImageField,
    DateInput,
    TimeInput,
} from 'react-admin';
import {
    RichTextInput,
} from 'ra-input-rich-text';
import RichTextToolbar from "../toolbars/RichTextToolbar";
import {Col} from "react-bootstrap";
import {formatImage} from "../../../http/dataProviders/functions";

const CreateEvent = () => {
    return (
        <Create>
            <TabbedForm>
                <TabbedForm.Tab label="Main">
                    <TextInput source="title" fullWidth inputProps={{maxLength: 255}}/>
                    <Col>
                        <DateInput source="date" className="me-5"/>
                        <TimeInput source="start_time" className="me-5"/>
                        <TimeInput source="end_time"/>
                    </Col>
                    <TextInput source="place" fullWidth inputProps={{maxLength: 255}}/>
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
        </Create>
    );
};

export default CreateEvent;