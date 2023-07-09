import React from 'react';
import {
    Create,
    ReferenceInput,
    SelectInput,
    TextInput,
    required, TabbedForm, ImageInput, ImageField,
} from 'react-admin';
import {
    RichTextInput,
} from 'ra-input-rich-text';
import RichTextToolbar from "../toolbars/RichTextToolbar";
import {formatImage} from "../../../http/dataProviders/functions";

const CreateCourse = (props) => {
    return (
        <Create {...props}>
            <TabbedForm>
                <TabbedForm.Tab label="Main">
                    <ReferenceInput source="category" label="category"
                                    reference="courses/category">
                        <SelectInput optionText="title" optionValue="id"
                                     validate={required()}/>
                    </ReferenceInput>
                    <ReferenceInput source="learning_format"
                                    label="learning_format"
                                    reference="courses/formats">
                        <SelectInput optionText="label" optionValue="id"
                                     validate={required()}/>
                    </ReferenceInput>
                    <ReferenceInput source="teacher"
                                    label="teacher"
                                    reference="user/teachers">
                        <SelectInput optionText="user" optionValue="id"
                                     validate={required()}/>
                    </ReferenceInput>
                    <TextInput source="title" fullWidth validate={required()}/>
                    <TextInput source="price" validate={required()}/>
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
                    <TextInput label={"short_description1111"}
                               source={"short_description"}
                               validate={required()}
                               fullWidth multiline rows={3}/>
                    <RichTextInput
                        source="body"
                        toolbar={<RichTextToolbar/>}
                        validate={required()}/>
                </TabbedForm.Tab>
            </TabbedForm>
        </Create>
    )
};

export default CreateCourse;