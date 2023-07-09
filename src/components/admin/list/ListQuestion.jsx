import React from 'react';
import {
    Datagrid,
    List,
    NumberField,
    TextField,
    RichTextField,
} from 'react-admin';

const ListQuestion = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
                <RichTextField source="body" stripTags/>
                <NumberField source="question_type"/>
            </Datagrid>
        </List>
    );
};

export default ListQuestion;