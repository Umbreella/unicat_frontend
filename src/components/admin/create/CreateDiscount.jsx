import React from 'react';
import {
    Create,
    ReferenceInput,
    SelectInput,
    TextInput,
    required,
    TabbedForm,
    ImageInput,
    ImageField,
    DateTimeInput,
    DateInput,
    TimeInput, SimpleForm, NumberInput,
} from 'react-admin';
import {
    RichTextInput,
} from 'ra-input-rich-text';
import RichTextToolbar from "../toolbars/RichTextToolbar";
import {Col} from "react-bootstrap";
import {formatImage} from "../../../http/dataProviders/functions";

const CreateDiscount = () => {
    return (
        <Create>
            <SimpleForm>
                <ReferenceInput source="course"
                                label="course"
                                reference="courses">
                    <SelectInput optionText="title" optionValue="id"
                                 validate={required()}/>
                </ReferenceInput>
                <NumberInput source="percent" />
                <DateTimeInput source="start_date" />
                <DateTimeInput source="end_date" />
            </SimpleForm>
        </Create>
    );
};

export default CreateDiscount;