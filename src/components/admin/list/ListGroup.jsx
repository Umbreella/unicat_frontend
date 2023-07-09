import React from 'react';
import { Datagrid, List, TextField } from 'react-admin';

const ListGroup = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
                <TextField source="name" />
            </Datagrid>
        </List>
    );
};

export default ListGroup;