import React from 'react';
import {Datagrid, List, TextField} from "react-admin";

const ListTeacher = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
                <TextField source="user" />
                <TextField source="description" />
            </Datagrid>
        </List>
    );
};

export default ListTeacher;