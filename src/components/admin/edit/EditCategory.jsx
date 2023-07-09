import React from 'react';
import {Edit, SimpleForm, TextInput} from "react-admin";

const EditCategory = () => {
    return (
        <Edit>
            <SimpleForm>
                <TextInput source="title"/>
            </SimpleForm>
        </Edit>
    );
};

export default EditCategory;