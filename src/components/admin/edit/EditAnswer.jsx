import React from 'react';
import {
    BooleanInput,
    Edit,
    SimpleForm,
    TextInput,
    useEditController
} from 'react-admin';

const EditAnswer = (props) => {
    const selectedAnswerId = props.data;
    const closeEditAnswer = props.func;
    const {record, save, isLoading} = useEditController({
        resource: 'lessons/questions/answers',
        id: selectedAnswerId,
        redirect: '',
    });

    const overrideSave = (record) => {
        save(record);
        closeEditAnswer();
    }

    if (isLoading) {
        return <></>
    }

    return (
        <SimpleForm record={record} onSubmit={(record) => overrideSave(record)}>
            <TextInput source="value" fullWidth/>
            <BooleanInput source="is_true"/>
        </SimpleForm>
    );
};

export default EditAnswer;