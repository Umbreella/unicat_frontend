import React from 'react';
import {Datagrid, DateField, List, TextField} from 'react-admin';

const ListEvent = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
                <TextField source="title"/>
                <DateField source="date"/>
                <TextField source="start_time"/>
                <TextField source="end_time"/>
                <TextField source="place"/>
            </Datagrid>
        </List>
    );
};

export default ListEvent;