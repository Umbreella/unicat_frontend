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
                <TextInput source="description" fullWidth multiline rows={7} inputProps={{maxLength: 255}}/>
                <TextInput source={"facebook"} fullWidth inputProps={{maxLength: 255}}/>
                <TextInput source={"twitter"} fullWidth inputProps={{maxLength: 255}}/>
                <TextInput source={"google_plus"} fullWidth inputProps={{maxLength: 255}}/>
                <TextInput source={"vk"} fullWidth inputProps={{maxLength: 255}}/>
            </SimpleForm>
        </Create>
    );
};

export default CreateTeacher;