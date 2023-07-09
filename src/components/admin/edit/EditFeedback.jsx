import React from 'react';
import {
    Edit,
    SimpleForm,
    TextInput,
    DateTimeInput,
    BooleanInput,
} from 'react-admin';

const EditFeedback = () => {
    return (
        <Edit>
            <SimpleForm>
                <TextInput source="name" disabled fullWidth/>
                <TextInput source="email" disabled fullWidth/>
                <TextInput source="body" disabled fullWidth multiline
                           rows={7}/>
                <DateTimeInput source="created_at" disabled/>
                <BooleanInput source="is_closed"/>
            </SimpleForm>
        </Edit>
    );
};

export default EditFeedback;