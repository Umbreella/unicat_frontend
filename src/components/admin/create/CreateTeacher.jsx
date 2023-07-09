import React from 'react';
import {
    Create,
    ReferenceInput,
    required,
    SelectInput,
    TextInput,
    SimpleForm
} from "react-admin";

const CreateTeacher = (props) => {
    return (
        <Create {...props}>
            <SimpleForm>
                <ReferenceInput source="user" label="user"
                                reference="user">
                    <SelectInput optionText="first_name" optionValue="id"
                                 validate={required()}/>
                </ReferenceInput>
                <TextInput source="description" fullWidth multiline rows={7}/>
                <TextInput source={"facebook"} fullWidth/>
                <TextInput source={"twitter"} fullWidth/>
                <TextInput source={"google_plus"} fullWidth/>
                <TextInput source={"vk"} fullWidth/>
            </SimpleForm>
        </Create>
    );
};

export default CreateTeacher;