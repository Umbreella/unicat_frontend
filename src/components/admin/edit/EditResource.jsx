import React from 'react';
import {
    Edit,
    SimpleForm,
    TextInput,
    DateTimeInput,
    ImageField
} from 'react-admin';

const EditResource = () => {
    return (
        <Edit>
            <SimpleForm>
                <ImageField source="file" fullWidth/>
                <TextInput source="name" disabled/>
                <DateTimeInput source="loaded_at" disabled/>
            </SimpleForm>
        </Edit>
    );
};

export default EditResource;