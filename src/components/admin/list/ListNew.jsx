import React from 'react';
import {Datagrid, DateField, List, TextField} from 'react-admin';

const ListNew = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
                <TextField source="title"/>
                <DateField source="created_at" showTime/>
            </Datagrid>
        </List>
    );
};

export default ListNew;