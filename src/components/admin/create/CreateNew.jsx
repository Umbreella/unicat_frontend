import React from 'react';
import {
    Create,
    TextInput,
    required,
    ImageInput,
    ImageField,
    SimpleForm,
} from 'react-admin';
import {
    RichTextInput,
} from 'ra-input-rich-text';
import RichTextToolbar from "../toolbars/RichTextToolbar";
import {formatImage} from "../../../http/dataProviders/functions";

const CreateNew = () => {
    return (
        <Create>
            <SimpleForm>
                <TextInput source="title" fullWidth/>
                <ImageInput format={formatImage}
                            minSize={5000}
                            maxSize={5000000}
                            source="preview"
                            accept="image/*"
                            validate={required()}>
                    <ImageField source="src"/>
                </ImageInput>
                <TextInput source="short_description" fullWidth multiline
                           rows={5}/>
                <RichTextInput
                    source="description"
                    toolbar={<RichTextToolbar/>}
                    validate={required()}/>
            </SimpleForm>
        </Create>
    );
};

export default CreateNew;