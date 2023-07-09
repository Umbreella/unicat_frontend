import React from 'react';
import {
    Create,
    AutocompleteArrayInput,
    ReferenceArrayInput,
    SimpleForm,
    TextInput
} from "react-admin";

const CreateGroup = () => {
    return (
        <Create>
            <SimpleForm>
                <TextInput source="name" fullWidth/>
                <ReferenceArrayInput source="permissions"
                                     reference="user/permissions">
                    <AutocompleteArrayInput optionText="name" fullWidth/>
                </ReferenceArrayInput>
            </SimpleForm>
        </Create>
    );
};

export default CreateGroup;