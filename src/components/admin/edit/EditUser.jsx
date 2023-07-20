import React from 'react';
import {
    Edit,
    ImageField,
    ImageInput,
    TabbedForm,
    TextInput,
    BooleanInput, ReferenceArrayInput, AutocompleteArrayInput,
} from "react-admin";
import {formatImage} from "../../../http/dataProviders/functions";


const EditUser = (props) => {
    return (
        <Edit>
            <TabbedForm>
                <TabbedForm.Tab label="Login">
                    <TextInput source="email" fullWidth/>
                    <TextInput source="password" fullWidth multiline rows={2}/>
                    <BooleanInput source="is_staff"/>
                    <ReferenceArrayInput source="groups"
                                         reference="user/groups">
                        <AutocompleteArrayInput optionText="name" fullWidth/>
                    </ReferenceArrayInput>
                    <ReferenceArrayInput source="user_permissions"
                                         reference="user/permissions">
                        <AutocompleteArrayInput optionText="name" fullWidth/>
                    </ReferenceArrayInput>
                </TabbedForm.Tab>
                <TabbedForm.Tab label="Personal data">
                    <ImageInput format={formatImage}
                                minSize={5000}
                                maxSize={5000000}
                                source="photo"
                                accept="image/*">
                        <ImageField source="src"/>
                    </ImageInput>
                    <TextInput source="first_name" fullWidth/>
                    <TextInput source="last_name" fullWidth/>
                </TabbedForm.Tab>
            </TabbedForm>
        </Edit>
    );
};

export default EditUser;