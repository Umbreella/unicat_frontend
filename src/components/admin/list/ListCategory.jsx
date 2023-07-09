import React from 'react';
import {Datagrid, List, TextField, TextInput} from 'react-admin';


const ListCategory = () => {
    const categoryFilters = [
        <TextInput label="Search" source="q" alwaysOn/>,
    ];

    return (
        <List filters={categoryFilters}>
            <Datagrid rowClick="edit">
                <TextField source="title"/>
            </Datagrid>
        </List>
    );
};

export default ListCategory;