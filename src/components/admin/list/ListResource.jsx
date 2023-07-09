import React from 'react';
import {List, Datagrid, TextField, DateField} from 'react-admin';

const ListResource = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
                <TextField source="name"/>
                <DateField source="loaded_at" showTime/>
            </Datagrid>
        </List>
    );
};

export default ListResource;