import React from 'react';
import {
    Edit,
    ReferenceInput,
    SelectInput,
    TextInput,
    SimpleForm,
    required,
} from 'react-admin';

const EditTeacher = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <ReferenceInput source="user" label="user"
                                reference="user">
                    <SelectInput optionValue="id"
                                 validate={required()}
                                 optionText={(record) => record && `${record.last_name} ${record.first_name}`}/>
                </ReferenceInput>
                <TextInput source="description"
                           fullWidth
                           multiline
                           rows={7} inputProps={{maxLength: 255}}/>
                <TextInput source={"facebook"} fullWidth inputProps={{maxLength: 255}}/>
                <TextInput source={"twitter"} fullWidth inputProps={{maxLength: 255}}/>
                <TextInput source={"google_plus"} fullWidth inputProps={{maxLength: 255}}/>
                <TextInput source={"vk"} fullWidth inputProps={{maxLength: 255}}/>
            </SimpleForm>
        </Edit>
    );
};

export default EditTeacher;