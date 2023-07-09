import React from 'react';
import {
    Datagrid,
    EmailField,
    List,
    TextField,
    DateField,
    BooleanField,
} from 'react-admin';

const ListFeedback = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
                <TextField source="name"/>
                <EmailField source="email"/>
                <TextField source="body"/>
                <DateField source="created_at" showTime/>
                <BooleanField source="is_closed"/>
            </Datagrid>
        </List>
    );
};

export default ListFeedback;