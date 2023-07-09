import React from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
} from "react-admin";

const CreateCategory = () => {
    return (
        <Create>
            <SimpleForm>
                <TextInput source="title"/>
            </SimpleForm>
        </Create>
    );
};

export default CreateCategory;