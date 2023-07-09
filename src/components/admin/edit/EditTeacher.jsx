import React from 'react';
import {
    Edit,
    NumberInput,
    ReferenceInput,
    SelectInput,
    TextInput,
    ImageInput,
    SimpleForm,
    required,
    TabbedForm,
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
                           rows={7}/>
                <TextInput source={"facebook"} fullWidth/>
                <TextInput source={"twitter"} fullWidth/>
                <TextInput source={"google_plus"} fullWidth/>
                <TextInput source={"vk"} fullWidth/>
            </SimpleForm>
        </Edit>
    );
};

export default EditTeacher;