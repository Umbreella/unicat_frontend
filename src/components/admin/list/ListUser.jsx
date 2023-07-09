import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    EmailField,
    BooleanField,
} from "react-admin";

const ListUser = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
                <EmailField source="email"/>
                <TextField source="first_name"/>
                <TextField source="last_name"/>
                <BooleanField source="is_staff"/>
            </Datagrid>
        </List>
    );
};

export default ListUser;