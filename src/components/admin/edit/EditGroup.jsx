import React from 'react';
import {
    Edit,
    SimpleForm,
    TextInput,
    ReferenceArrayInput,
    AutocompleteArrayInput,
} from 'react-admin';

const EditGroup = () => {
    return (
        <Edit>
            <SimpleForm>
                <TextInput source="name" fullWidth/>
                <ReferenceArrayInput source="permissions"
                                     reference="user/permissions">
                    <AutocompleteArrayInput optionText="name" fullWidth/>
                </ReferenceArrayInput>
            </SimpleForm>
        </Edit>
    );
};

export default EditGroup;