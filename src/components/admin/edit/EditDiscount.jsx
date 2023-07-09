import React from 'react';
import {
    DateTimeInput,
    Edit, NumberInput, ImageInput, ReferenceInput, required, SelectInput,
    SimpleForm,
    TextInput,
} from "react-admin";

const EditDiscount = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <ReferenceInput source="course"
                                label="course"
                                reference="courses">
                    <SelectInput optionText="title" optionValue="id"
                                 validate={required()}/>
                </ReferenceInput>
                <NumberInput source="percent" />
                <DateTimeInput source="start_date" />
                <DateTimeInput source="end_date" />
            </SimpleForm>
        </Edit>
    );
};

export default EditDiscount;