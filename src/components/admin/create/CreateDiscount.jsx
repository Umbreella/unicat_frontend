import React from 'react';
import {
    Create,
    ReferenceInput,
    SelectInput,
    required,
    DateTimeInput,
    SimpleForm,
    NumberInput,
} from 'react-admin';

const CreateDiscount = () => {
    return (
        <Create>
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
        </Create>
    );
};

export default CreateDiscount;