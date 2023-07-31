import React from 'react';
import {
    DateTimeInput,
    Edit,
    ImageField,
    ImageInput,
    required,
    SimpleForm,
    TextInput,
} from "react-admin";
import {RichTextInput} from "ra-input-rich-text";
import RichTextToolbar from "../toolbars/RichTextToolbar";
import {formatImage} from "../../../http/dataProviders/functions";

const EditNew = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput source="title" fullWidth inputProps={{maxLength: 255}}/>
                <DateTimeInput source="created_at" disabled/>
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
                <RichTextInput source="description"
                               toolbar={<RichTextToolbar/>}
                               validate={required()}/>
            </SimpleForm>
        </Edit>
    );
};

export default EditNew;