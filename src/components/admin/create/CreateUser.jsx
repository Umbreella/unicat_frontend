import React from 'react';
import {
    AutocompleteArrayInput,
    BooleanInput,
    Create,
    ImageField,
    ImageInput, ReferenceArrayInput,
    required,
    TabbedForm,
    TextInput
} from "react-admin";
import {formatImage} from "../../../http/dataProviders/functions";

const CreateUser = (props) => {
    return (
        <Create {...props}>
            <TabbedForm>
                <TabbedForm.Tab label="Login">
                    <TextInput source="email"
                               validate={required()}
                               fullWidth inputProps={{maxLength: 128}}/>
                    <TextInput source="password"
                               validate={required()}
                               fullWidth
                               multiline rows={2} inputProps={{maxLength: 128}}/>
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
                    <TextInput source="first_name" fullWidth inputProps={{maxLength: 128}}/>
                    <TextInput source="last_name" fullWidth inputProps={{maxLength: 128}}/>
                </TabbedForm.Tab>
            </TabbedForm>
        </Create>
    );
};

export default CreateUser;