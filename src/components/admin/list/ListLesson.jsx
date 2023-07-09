import React from 'react';
import {
    Datagrid,
    List,
    TextField,
    ReferenceField,
} from 'react-admin';

const ListLesson = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
                <TextField source="title"/>
                <ReferenceField source="lesson_type" reference="lessons/types">
                    <TextField source="label"/>
                </ReferenceField>
            </Datagrid>
        </List>
    );
};

export default ListLesson;