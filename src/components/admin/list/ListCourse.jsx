import React from 'react';
import { Datagrid, List, NumberField, TextField } from 'react-admin';


const ListCourse = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
                <TextField source="title" />
                <TextField source="price" />
                <NumberField source="count_lectures" />
                <NumberField source="count_independents" />
            </Datagrid>
        </List>
    );
};

export default ListCourse;